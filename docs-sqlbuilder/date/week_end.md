---
sidebar_position: 7
---

# 周末

### 使用示例

````java
import com.youngdatafan.sqlbuilder.enums.DatabaseType;
import com.youngdatafan.sqlbuilder.enums.FunctionType;
import com.youngdatafan.sqlbuilder.model.Function;
import com.youngdatafan.sqlbuilder.model.Model;
import com.youngdatafan.sqlbuilder.model.Query;
import com.youngdatafan.sqlbuilder.model.Schema;
import com.youngdatafan.sqlbuilder.model.Table;

public class Test {

    @org.junit.Test
    public void getFunction() {
        Schema schema = Schema.getSchema("");
        Table test = Table.getOriginalTable(schema, "test", "t");
     
        Model date = test.addField("date");
        Query query = new Query();
        Function function = Function.getFunction(FunctionType.WEEK_END, date);
        query.addColumn("val", function);
        query.addFrom(test);
        System.out.println("oracle：");
        System.out.println(query.getDatabaseSql(DatabaseType.ORACLE));
        System.out.println();
       
        System.out.println("pg：");
        System.out.println(query.getDatabaseSql(DatabaseType.POSTGRESQL));
        System.out.println();
       
        System.out.println("clickhouse：");
        System.out.println(query.getDatabaseSql(DatabaseType.CLICKHOUSE));
        System.out.println();
       
        System.out.println("mysql：");
        System.out.println(query.getDatabaseSql(DatabaseType.MYSQL));
        System.out.println();
       
        System.out.println("sqlserver：");
        System.out.println(query.getDatabaseSql(DatabaseType.MSSQL));
        System.out.println();
       
        System.out.println("kdw：");
        System.out.println(query.getDatabaseSql(DatabaseType.KDW));
        System.out.println();
    }
}
````
根据数据源获取对于数据库的sql。

### ORACLE

````sql
SELECT trunc(t."date", 'D' ) + 7 AS "val" FROM "test" t   
````

### MYSQL

````sql
SELECT STR_TO_DATE(date_format(DATE_ADD(t.`date`, INTERVAL ( 8-DAYOFWEEK (t.`date`)) DAY ),'%Y-%m-%d'),'%Y-%m-%d') AS `val` FROM `test` t    
````

### POSTGRESQL
````sql
SELECT cast(( date_trunc( 'week', t.date) + INTERVAL '6 day' ) as date) AS val FROM test t 
````

### CLICKHOUSE
````sql
SELECT addDays(toStartOfWeek(t.date),7) AS val FROM test t   
````

### KDW
````sql
SELECT cast(( date_trunc( 'week', t.date) + INTERVAL '6 day' ) as date) AS val FROM test t 
````

### SQLSERVER

````sql
SELECT CONVERT(date,DATEADD( DAY, ( 8-DATEPART ( weekday, t.date ) ), t.date)) AS val FROM test t    
````
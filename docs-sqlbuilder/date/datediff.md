---
sidebar_position: 11
---

# 日期间隔

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
     
        CustomSql timeUtil = CustomSql.getCustomSql("year");
        Model date = test.addField("date");
        Model date1 = test.addField("date1");
        Query query = new Query();
        Function function = Function.getFunction(FunctionType.DATE_DIFF,timeUtil, date, date1);
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
SELECT MONTHS_BETWEEN(t."date",t."date1")/12 AS "val" FROM "test" t  
````

### MYSQL

````sql
SELECT STR_TO_DATE(date_format(DATE_ADD(t.`date`, INTERVAL ( 2-DAYOFWEEK (t.`date`)) DAY ),'%Y-%m-%d'),'%Y-%m-%d') AS `val` FROM `test` t 
````

### POSTGRESQL
````sql
SELECT ROUND(DATE_PART('epoch',t.date-t.date1)/(60*60*24*365)) AS val FROM test t    
````

### CLICKHOUSE
````sql
SELECT TIMESTAMPDIFF(year,t.`date`,t.`date1`) AS `val` FROM `test` t  
````

### KDW
````sql
SELECT ROUND(DATE_PART('epoch',t.date-t.date1)/(60*60*24*365)) AS val FROM test t   
````

### SQLSERVER

````sql
SELECT DATEDIFF(year,t.date,t.date1) AS val FROM test t
````
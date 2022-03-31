---
sidebar_position: 19
---

# 取周天数

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
        //日期格式参考database.properties配置文件
       
        Model date = test.addField("date");
     
        Query query = new Query();
        Function function = Function.getFunction(FunctionType.WEEKDAY, date);
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
SELECT TO_CHAR(t."date" + NUMTODSINTERVAL(-1,'DAY'),'D') AS "val" FROM "test" t   
````

### MYSQL

````sql
SELECT WEEKDAY(t.`date`)+1 AS `val` FROM `test` t
````

### POSTGRESQL
````sql
SELECT extract(DOW FROM t.date) AS val FROM test t   
````

### CLICKHOUSE
````sql
SELECT toDayOfWeek(toDate(t.date)) AS val FROM test t 
````

### KDW
````sql
SELECT extract(DOW FROM t.date) AS val FROM test t
````

### SQLSERVER

````sql
SELECT DATEPART(WEEKDAY,DATEADD(DAY,-1,t.date)) AS val FROM test t
````
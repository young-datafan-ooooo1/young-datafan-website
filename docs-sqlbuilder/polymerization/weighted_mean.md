---
sidebar_position: 11
---

# 加权平均

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
        Query query = new Query();
        //加权平均 sum(num*num1)/sum(num1)
        Model num = test.addField("num");
        Model num1 = test.addField("num1");
        Function function = Function.getFunction(FunctionType.WEIGHTED_MEAN, num, num1);
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
SELECT CASE WHEN SUM(t."num1") = 0 THEN null ELSE SUM(t."num"*t."num1")/SUM(t."num1") END AS "val" FROM "test" t  
````

### MYSQL

````sql
SELECT SUM(t.`num`*t.`num1`)/SUM(t.`num1`) AS `val` FROM `test` t 
````

### POSTGRESQL
````sql
SELECT CASE WHEN SUM(t.num1) = 0 THEN null ELSE SUM(t.num*t.num1)/SUM(t.num1) END AS val FROM test t 
````

### CLICKHOUSE
````sql
SELECT IF (SUM(t.num) = 0  or SUM(t.num * t.num1) = 0 , null, SUM(t.num * t.num1)/ SUM(t.num1)) AS val FROM test t
````

### KDW
````sql
SELECT CASE WHEN SUM(t.num1) = 0 THEN null ELSE SUM(t.num*t.num1)/SUM(t.num1) END AS val FROM test t
````

### SQLSERVER

````sql
SELECT CASE WHEN SUM(t.num1) = 0 THEN null ELSE SUM(t.num*t.num1)/SUM(t.num1) END AS val FROM test t
````


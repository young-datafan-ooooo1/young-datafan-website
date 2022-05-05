---
sidebar_position: 12
---

# 乘积

### 使用示例

````java
import com.youngdatafan.sqlbuilder.enums.DatabaseType;
import com.youngdatafan.sqlbuilder.enums.FunctionType;
import com.youngdatafan.sqlbuilder.model.Field;
import com.youngdatafan.sqlbuilder.model.Function;
import com.youngdatafan.sqlbuilder.model.Query;
import com.youngdatafan.sqlbuilder.model.Schema;
import com.youngdatafan.sqlbuilder.model.Table;

public class Test {

    @org.junit.Test
    public void function() {
        Schema schema = Schema.getSchema("");
        Table test = Table.getOriginalTable(schema, "test", "t");
        Query query = new Query();
        query.addFrom(test);
        Field age = test.addField("age");
        Function function = Function.getFunction(FunctionType.MUL_POLYM, age);
        query.addColumn(function);
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
SELECT case when min(abs(t."age")) = 0 then 0 ELSE EXP(SUM(Log(EXP(1),abs(nullif(t."age" ,0)))))*ROUND(0.5-MOD(count(nullif(sign(sign(t."age")+0.5),1)),2),0) end FROM "test" t     
````

### MYSQL

````sql
SELECT case when min(abs(t.`age`)) = 0 then 0 else EXP(SUM(Log(2.718281828459045, abs(nullif(t.`age`, 0)))))* round(0.5-count(nullif(sign(sign(t.`age`)+ 0.5), 1))%2, 0) end FROM `test` t     
````

### POSTGRESQL
````sql
SELECT case when min(abs(t.age)) = 0 then 0 else EXP(SUM(Log(2.718281828459045,abs(nullif(t.age ,0)))))*round(0.5-count(nullif(sign(sign(t.age)+0.5),1))%2,0) end FROM test t     
````

### CLICKHOUSE
````sql
SELECT case when min(abs(t.age)) = 0 then 0 else EXP(SUM(Log(abs(nullif(t.age ,0)))))*round(0.25-count(nullif(sign(sign(t.age)+0.5),1))%2,0) end  FROM test t     
````

### KDW
````sql
SELECT case when min(abs(t.age)) = 0 then 0 else EXP(SUM(Log(2.718281828459045,abs(nullif(t.age ,0)))))*round(0.5-count(nullif(sign(sign(t.age)+0.5),1))%2,0) end FROM test t     
````

### SQLSERVER

````sql
SELECT case when min(abs(t.age)) = 0 then 0 else EXP(SUM(Log(abs(nullif(t.age ,0)))))*round(0.5-count(nullif(sign(sign(t.age)+0.5),1))%2,0) end  FROM test t     
````


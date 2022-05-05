---
sidebar_position: 20
---

# 权重和

### 使用示例

````java

import com.youngdatafan.sqlbuilder.enums.DatabaseType;
import com.youngdatafan.sqlbuilder.enums.FunctionType;
import com.youngdatafan.sqlbuilder.model.CustomSql;
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
        Field salary = test.addField("salary");
        Function function = Function.getFunction(FunctionType.SUM_WEIGHT, age, salary);
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
SELECT sum(t."age"*t."salary") FROM "test" t     
````

### MYSQL
````sql
SELECT sum(t.`age`*t.`salary`) FROM `test` t     
````

### POSTGRESQL
````sql
SELECT sum(t.age*t.salary) FROM test t     
````

### CLICKHOUSE
````sql
SELECT sum(t.age*t.salary) FROM test t     
````

### KDW
````sql
SELECT sum(t.age*t.salary) FROM test t     
````

### SQLSERVER

````sql
SELECT sum(t.age*t.salary) FROM test t     
````


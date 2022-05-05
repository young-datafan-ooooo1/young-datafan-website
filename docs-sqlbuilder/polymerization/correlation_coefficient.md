---
sidebar_position: 18
---

# 相关系数

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
        Function function = Function.getFunction(FunctionType.CORRELATION_COEFFICIENT, age, salary);
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
SELECT CASE WHEN STDDEV_POP(t."age") = 0 OR STDDEV_POP(t."salary")= 0 THEN NULL ELSE COVAR_POP(t."age" ,t."salary")/(STDDEV_POP(t."age")*STDDEV_POP(t."salary")) END FROM "test" t     
````

### MYSQL
````sql
SELECT CASE WHEN STDDEV_POP(t.`age`) = 0 OR STDDEV_POP(t.`salary`)= 0 THEN NULL ELSE (VAR_POP(t.`age`+t.`salary`) - VAR_POP(t.`age`) - VAR_POP(t.`salary`))/(2*STDDEV_POP(t.`age`)*STDDEV_POP(t.`salary`)) END FROM `test` t     
````

### POSTGRESQL
````sql
SELECT CASE WHEN STDDEV_POP(t.age) = 0 OR STDDEV_POP(t.salary)= 0 THEN NULL ELSE COVAR_POP(t.age ,t.salary)/(STDDEV_POP(t.age)*STDDEV_POP(t.salary)) END FROM test t     
````

### CLICKHOUSE
````sql
SELECT if(stddevPop(t.age)=0 or stddevPop(t.salary)=0,null,covarPop(t.age,t.salary)/(stddevPop(t.age)*stddevPop(t.salary))) FROM test t     
````

### KDW
````sql
SELECT CASE WHEN STDDEV_POP(t.age) = 0 OR STDDEV_POP(t.salary)= 0 THEN NULL ELSE COVAR_POP(t.age ,t.salary)/(STDDEV_POP(t.age)*STDDEV_POP(t.salary)) END FROM test t     
````

### SQLSERVER

````sql
SELECT CASE WHEN stdevp(t.age) = 0 OR stdevp(t.salary)= 0 THEN NULL ELSE (varp(t.age+t.salary) - varp(t.age) - varp(t.salary))/(2*stdevp(t.age)*stdevp(t.salary)) END FROM test t     
````


---
sidebar_position: 6
---

# 百分比转换成数值

### 使用示例

````java

import com.youngdatafan.sqlbuilder.enums.DatabaseType;
import com.youngdatafan.sqlbuilder.enums.FunctionType;
import com.youngdatafan.sqlbuilder.model.CustomSql;
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
        CustomSql customSql = CustomSql.getCustomSql("'20%'");
        Function function = Function.getFunction(FunctionType.PERCENTAGE_NUM, customSql);
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
SELECT REPLACE('20%','%','')/100 FROM "test" t  
 ````

### MYSQL

````sql
SELECT REPLACE('20%','%','')/100 FROM `test` t
````

### POSTGRESQL
````sql
SELECT cast(REPLACE('20%','%','') as numeric )/cast(100 as numeric ) FROM test t   
````

### CLICKHOUSE
````sql
SELECT toDecimal128OrZero(REPLACE('20%','%',''), LENGTH('10%'))/100  FROM test t 
````

### KDW
````sql
SELECT REPLACE('20%','%','')/100 FROM test t  
````

### SQLSERVER

````sql
SELECT REPLACE('20%','%','')/100 FROM test t  
````
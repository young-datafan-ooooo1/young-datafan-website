---
sidebar_position: 13
---

# Pth百分位

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
        CustomSql param1 = CustomSql.getCustomSql("0.4");
        Function function = Function.getFunction(FunctionType.QUANTILE, age, param1);
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

//        System.out.println("mysql：");
//        System.out.println(query.getDatabaseSql(DatabaseType.MYSQL));
//        System.out.println();

//        System.out.println("sqlserver：");
//        System.out.println(query.getDatabaseSql(DatabaseType.MSSQL));
//        System.out.println();

        System.out.println("kdw：");
        System.out.println(query.getDatabaseSql(DatabaseType.KDW));
        System.out.println();
    }
}
````
根据数据源获取对于数据库的sql。

### ORACLE

````sql
SELECT PERCENTILE_CONT(0.4) within group(order by t."age") FROM "test" t   
````

### POSTGRESQL
````sql
SELECT percentile_disc(0.4) within group (order by t.age) FROM test t  
````

### CLICKHOUSE
````sql
SELECT quantile(0.4)(t.age) FROM test t     
````

### KDW
````sql
SELECT percentile_disc(0.4) within group (order by t.age) FROM test t     
````



---
sidebar_position: 13
---

# not in

### 使用示例

````java
import com.youngdatafan.sqlbuilder.enums.Cp;
import com.youngdatafan.sqlbuilder.enums.DatabaseType;
import com.youngdatafan.sqlbuilder.model.BinaryCondition;
import com.youngdatafan.sqlbuilder.model.Conditions;
import com.youngdatafan.sqlbuilder.model.CustomSql;
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
        Model name = test.addField("name");
        Model age = test.addField("age");
        query.addColumn("name", name);
        query.addColumn("age", age);
        query.addFrom(test);
        CustomSql equal = CustomSql.getCustomSql("'李四'");
        CustomSql equal1 = CustomSql.getCustomSql("'王五'");
        //where
        Conditions where = Conditions.getInstance(Cp.NONE, InCondition.notIn(name, equal, equal1));
        query.setWHere(where);
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
SELECT t."name" AS "name",t."age" AS "age" FROM "test" t WHERE t."name" NOT IN ('李四','王五')     
````

### MYSQL

````sql
SELECT t.`name` AS `name`,t.`age` AS `age` FROM `test` t WHERE t.`name` NOT IN ('李四','王五')     
````

### POSTGRESQL
````sql
SELECT t.name AS name,t.age AS age FROM test t WHERE t.name NOT IN ('李四','王五')       
````

### CLICKHOUSE
````sql
SELECT t.name AS name,t.age AS age FROM test t WHERE t.name NOT IN ('李四','王五')  
````

### KDW
````sql
SELECT t.name AS name,t.age AS age FROM test t WHERE t.name NOT IN ('李四','王五')
````

### SQLSERVER

````sql
SELECT t.name AS name,t.age AS age FROM test t WHERE t.name NOT IN ('李四','王五') 
````


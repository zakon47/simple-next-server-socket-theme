import {POOL} from "../db";

//CRUD
class DBExampleQuery {
    db: typeof POOL;
    constructor() {
        this.db = POOL
    }
    async create(data:string, ip:string){
      const person = await this.db.query("INSERT INTO person (name, surname) VALUES ($1, $2) RETURNING *",
          [data, ip]
      );
      return person.rows[0];
    }
    async read(){
        const person = await this.db.query("SELECT * FROM person");
        return person.rows[0];
    }
    async read2(){
        const person = await this.db.query("SELECT * FROM person WHERE id=$1", [1]);
        return person.rows[0];
    }
    async update(){
        //RETURNING - чтобы получить последнюю запись, с которой работали
        const person = await this.db.query("UPDATE person SET name=$1, surnam=$2 WHERE id=$3 RETURNING *",
            ["zak", "rozhkov", 1]
        );
        return person.rows[0];
    }
    async delete(){
        const person = await this.db.query("DELETE FROM person WHERE id=$1", [1]);
        return person.rows[0];
    }
}

export default new DBExampleQuery()
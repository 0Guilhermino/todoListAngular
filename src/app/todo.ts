export class Todo {

    id!: Number
    title!: String
    done!: Boolean
    
   constructor(
    id: Number,
    title: String,
    done: Boolean
   ){ 
    this.id = id;
    this.title = title;
    this.done = done
    }
}
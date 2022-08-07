function Scater(name,title,strength,points){
    this.name=name;
    this.title=title;
    this.strength=strength;
    this.points=points;
    this.run=function(){
        console.log(`${this.name} can Run Fast`);
    }
    this.walk=function(){
        console.log(`Titled as ${this.title} is Walking`);
    }
    this.punch=function(){
        console.log(`Having ${this.strength} is Fighting`);
    }
}
let player1=new Scater('ninja','Pigi','Heavy',90);

export default function Hungry({isHungry, food, restaurant}){

    if(isHungry){
        return <h2>I am hungry so I will eat {food} from {restaurant}</h2>
    }
    else return <h2>I am not hungry so will just have {food} from {restaurant}</h2>
}
import Counter from "./Counter"
import img from "./img/gatito.jpg";


function Main() {
    
    return(
        <div>
            
            <Counter datos={['Alejandra Lizeth Chairez Medina', '20975', '5A']}/>
            <img src={img} alt="gatito.png"/> 
            
        </div>
    );
}

export default Main;
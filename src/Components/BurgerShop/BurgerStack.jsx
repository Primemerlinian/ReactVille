
import Ingredient from "./Ingredient"

const BurgerStack = (props) => {
  return (
    <>
      <ul className="burger-stack">
        {props.stack?.length ? 
        <>
          {props.stack.map((ingredient, idx) => 
            <Ingredient 
              key={ingredient.idx} 
              idx={idx} 
              ingredient={ingredient} 
              removeFromBurger={props.removeFromBurger} 
            />
          )}
          </>
          :
          <p>No Ingredients Yet</p>
        }
      </ul>
    </>
  )
}

export default BurgerStack








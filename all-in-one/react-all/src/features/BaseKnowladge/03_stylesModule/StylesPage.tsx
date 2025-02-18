import style from "./LocalStyles.module.scss"
import "./GlobalStyles.scss"

export default function StylesPage(){
    return <div>
        <p className={style[`local-text`]}>Local style Text: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ea et cupiditate in. Illum atque ullam esse vel voluptate. Vitae dicta necessitatibus delectus vero similique deserunt ea repellat fuga natus.</p>
        
        <p className="global-style-text">Global style Text: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ea et cupiditate in. Illum atque ullam esse vel voluptate. Vitae dicta necessitatibus delectus vero similique deserunt ea repellat fuga natus.</p>

    </div>
}
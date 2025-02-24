import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant'
import MenuItem from './MenuItem';

function Menu() {
  const menu =  useLoaderData(); // wyciagamy dane z loadera wprowadzonego w routerze

  console.log( menu)

  return <h1>
    {menu && menu.map(pizza => <MenuItem pizza={pizza} key={pizza.id} /> )}
  </h1>;
}

export async function loader(){ 
  // w loaderze uzywamy tej funkcji aby w trakcie laadowania komponentu ona sie wykonala

  const menu = await getMenu()
  return menu;
}

export default Menu;

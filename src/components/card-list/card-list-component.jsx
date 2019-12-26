import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = props =>(

    // value in parent 
    // console.log("tt : " + props);
    // // return(<div className='card-list'>{props.children}</div>);
    // <div className='card-list'>
    // {this.state.monster.map(
    //             monster => (<h1>{monster.name}</h1>
    //     ))}
    // </div>


    // value in here
    // <div className='card-list'>
    // {props.monsters.map(monsters => (
    //     <h1 key={monsters.id}> {monsters.name}</h1>
    // ))}
    // </div>

    <div className='card-list'>
        {props.monsters.map(monster=> (
            <Card key={monster.id} monster={monster}> </Card>
        ))}
    </div>

);
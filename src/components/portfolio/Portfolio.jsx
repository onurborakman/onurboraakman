import {useEffect, useState} from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';
import {featured, web, desktop, design, game, api} from '../data';

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web Apps"
        },
        {
            id: "desktop",
            title: "Desktop Apps"
        },
        {
            id: "design",
            title: "Designs"
        },
        {
            id: "api",
            title: "APIs"
        },
        {
            id: "game",
            title: "Games"
        }
    ];

    useEffect(()=>{
        switch(selected){
            case "featured":
                setData(featured);
                break;
            case "web":
                setData(web);
                break;
            case "desktop":
                setData(desktop);
                break;
            case "design":
                setData(design);
                break;
            case "api":
                setData(api);
                break;
            case "game":
                setData(game);
                break;
            default:
                setData(featured);
            
        }
    },[selected]);

    return (
        <div className='portfolio' id='otherProjects'>
            <h1>Other Projects</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
                ))}
            </ul>
            <div className='container'>
                {data.map(d=>(
                    <div className='item'>

                        <a href={d.url}><img src={d.img} alt=""/></a>
                        <h3>{d.title}</h3>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}

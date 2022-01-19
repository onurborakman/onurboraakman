import {useState} from 'react';
import './frameworks.scss';

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assets/express.png",
            title: "Express JS",
            img:
              "https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmVydGljYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          },
          {
            id: "2",
            icon: "./assets/angular.png",
            title: "Angular JS",
            img:
              "https://images.unsplash.com/photo-1564754943164-e83c08469116?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmVydGljYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          },
          {
            id: "3",
            icon: "./assets/react.png",
            title: "React JS",
            img:
              "https://images.unsplash.com/photo-1558064340-601a5c6ac442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmVydGljYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          },
          {
            id: "4",
            icon: "./assets/laravel.png",
            title: "PHP Laravel",
            img:
              "https://images.unsplash.com/photo-1564698010692-0fe284aae806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHZlcnRpY2FsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          },
          {
            id: "5",
            icon: "./assets/spring.png",
            title: "Java Spring Boot",
            img:
              "https://images.unsplash.com/photo-1521584261872-c3c0963c8443?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHZlcnRpY2FsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          },
          {
            id: "6",
            icon: "./assets/net.png",
            title: "C# ASP.NET",
            img:
              "https://images.unsplash.com/photo-1598018993973-b6dda005c18a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHZlcnRpY2FsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          },
          {
              id: "7",
              icon: "./assets/vue.png",
              title: "Vue JS",
              img:
              "https://images.unsplash.com/photo-1626963781637-99729e787d60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHZlcnRpY2FsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          }
    ];

    const handleClick = (way) => {
        way === "left" 
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1) 
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }

    return (
        <div className='frameworks' id='frameworks'>
            <h1>Frameworks</h1>
            <div className='slider' style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map(d=>(
                    <div className='container'>
                        <div className='item'>
                            <div className='left'>
                                <div className='leftContainer'>
                                    <div className='imgContainer'>
                                        <img src={d.icon} alt=''/>
                                    </div>
                                    <h2>{d.title}</h2>
                                </div>
                            </div>
                            <div className='right'>
                                <img src={d.img} alt=''/>
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
            <img src="assets/arrow.png" className='arrow left' alt='' onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className='arrow right' alt='' onClick={()=>handleClick()}/>
        </div>
    )
}

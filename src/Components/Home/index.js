import React, { useState, useEffect } from 'react'
import { quizMainData } from '../../Config'
import './home.css'

export default function Home(props) {
    const [quizData, setQuizData] = useState([])
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        setIsFetching(true)
        setTimeout(()=>{
            setIsFetching(false)
            setQuizData(quizMainData)
        }, 1000)
        // fetch(`${process.env.REACT_APP_API_URL}/api/quiz/all`, {
        //     method: 'GET',
        //     headers: {
        //         'auth-token': '19c4ff12-e027-4320-b844-2cda768714e8',
        //         'content-type': 'application/json'
        //     }
        // })
        // .then(res=>res.json())
        // .then(res=>{
        //     // console.log(res)
        //     setIsFetching(false)
        //     setQuizData(res)
        // }).catch(err=>{
        //     setIsFetching(false)
        //     console.log(err)
        // })
    }, [])

    console.log(quizData)

    return (
        <div>
            <center>
                <h1 style={{color: '#283228'}}>
                    Quiz Dashboard
                </h1>
            </center>
            <div className='quizCardsContainer'>
                {
                    isFetching ? (
                        new Array(3).fill(0).map(ele=>(
                            <div className='quizCard'>
                                <div>
                                    <div className="title-skeleton">
                                    <div className="animated-background">
                                        <div className="skel-mask"></div>
                                    </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="description-skeleton">
                                    <div className="animated-background">
                                        <div className="skel-mask"></div>
                                    </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="description-skeleton">
                                    <div className="animated-background">
                                        <div className="skel-mask"></div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        quizData.map((quiz, i)=>{
                            return (
                                <div key={quiz.id} className='quizCard'>
                                    <div className='quizHeaderSection'>
                                        <h3 className={`quiz-list-${i+1}`}>{quiz.name}</h3>
                                        <button 
                                            className={`start-quiz-${i+1}`}
                                            onClick={()=>{
                                                props.history.push({
                                                    pathname: `/quiz/${quiz.id}`,
                                                    state: {
                                                      quizInfo: quiz
                                                    }
                                                }
                                                )
                                            }}
                                        >
                                            START
                                        </button>
                                    </div>
                                    <div className='quizDescription'>
                                        <span>
                                            {quiz.description}
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    )
                }
            </div>
        </div>
    )
}

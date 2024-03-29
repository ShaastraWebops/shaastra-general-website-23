import React from 'react'

const Profile = () => {
    const data = [{ name: "Akshay", id: 123456, college: "IIM", address: "Chennaicfvbjkghfvhjhgfklv b,c;kjhvjbjkhg", events: ["ertyui", "dfghjk", "edrtfgy"] }]
    return (
        <div className='container'>
            {data.map((data) => {
                return <div className='container-image'>
                    <div className='profile-img'></div>
                    <div className='name'>{data.name}</div>
                    <div className='id-title'>SHAASTRA ID</div>
                    <div className='shaastra-id'>{data.id}</div>
                </div>
            })}
            {
                data.map((data) => {
                    return <div className='container-info'>
                        <div className='college'>COLLEGE/OCCUPATION</div>
                        <div className='college-info'>{data.college}</div>
                        <div className='address'>ADDRESS</div>
                        <div className='address-info'>{data.address}</div>
                        <div className='events'>EVENTS/WORKSHOP REGISTERED</div>
                        <div className='events-info'><ol className='event'>{data.events.map((event) => {
                            return <li>{event}</li>
                        })}</ol></div>
                        <button className='edit'>EDIT PROFILE</button>
                    </div>
                })
            }


        </div>
    )
}

export default Profile
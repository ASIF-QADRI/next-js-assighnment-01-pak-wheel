import Link from "next/link"
export default
function daihatsu(){
    return(
        <><> <h1 className="centered-text"><img src="/images/car.png" alt="daihatsu" />
           </h1> <p>
                Daihatsu is a Japanese automotive manufacturer, established in 1907, known for producing compact and efficient vehicles. Originally a subsidiary of Toyota, Daihatsu specializes in small cars, trucks, and SUVs. The brand emphasizes fuel efficiency and practicality, appealing to urban drivers. Daihatsu's popular models include the Ayla, Sirion, and Terios.
                </p></><div className="centered-text">
                <button style={{ padding: "15px 30px", fontSize: "20px" }}>
            
                <Link href="http://localhost:3000"> back</Link></button>
                </div>
                </>
    )
    
}


import Header from '../components/Header';
import '../components/css/Main.css'

export default function Home() {
    // document.body.onpointermove = event => {
    //     const {clientX, clientY} = event;
    //     document.getElementById('blob').animate({
    //         left: `${clientX}px`,
    //         top: `${clientY}px`
    //     }, {duration: 15000, fill: "forwards"});
    // }
    return(
        <>
        <Header/>
        <main className="gradient-bg">
            {/* <div id="blob"></div>
            <div id="blur"></div> */}
        </main>
        </>
    )
}
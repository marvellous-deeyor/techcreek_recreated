import photo from "../component/assets/New idea.png"
import {motion}  from "framer-motion"
import member from "../component/assets/ic_member.svg"
import notification from "../component/assets/ic_notification.svg"
import ModalPage from ""
const HomePage  = () => {
	return ( <div className="body">
        <div className="left_screen">

		<h1 className="title"> WELCOME <br />
			 TO THE{`<CREEK/>`}</h1>

			<p className="home_text">TechCreek is a habitat for the teeming <br />
			<br />
				population of youths making sense of their <br />
				<br />
				 lives with their digital skills and competencies, <br />
				 <br />
				 and actively involved in the development of <br />
				 <br />
				 the ‘new economy’ from Rivers State.</p>
				
				<motion.div className="address"
				 animate={{
					x:"1vw",
					opacity:1,
				  }}
				  initial={{
					x:"-40vw",
					opacity:0.5,
				  }}
				  transition={{
					duration:2,
				  }}>
				Rivers State ICT Center. Opp. Pleasure Park Aba Road, Port Harcourt. Rivers <br />
				State, Nigeria. talk@techcreek.ng <br />
                 O9030003185, 09030003180
				</motion.div>
				 </div>

		<div className="right__screen">
	
			<img src={photo} alt="creek" />
			<div>
			<a href="<ModalPage />"><img className="notification_icon" src={notification} /> </div></a> 
			<a href="/members"
			  transition={{
				duration:2,
			
			  }}><img className="member_icon" src={member} alt="" /></a>
		</div>

	</div> );
}
 
export default HomePage;











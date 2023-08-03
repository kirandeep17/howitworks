import { getCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Head from 'next/head';
import { useEffect } from 'react';
import Router from 'next/router'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function blognew( {username,email,loggedIn,userData} ) {
   // const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: userData.username,
        password:userData.password,
        lastname: userData.last_name,
        mobile_number: userData.mobile_number,
        addressLine1: null,
        addressLine2: null,
        postcode: null,
        state: null,
        area: null,
        email: email,
        education: null,
        country: null,
        aboutMe: null,
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const id = userData.id
        
    
        try {
          const response = await fetch('http://127.0.0.1:8000/api/users/'+id, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            // Handle successful profile update
            alert('Profile updated successfully');
            window.location.reload(false);
          } else {
            // Handle error response
            const errorData = await response.json();
            console.error('Error updating profile:', errorData);
          }
        } catch (error) {
          console.error('Error updating profile:', error.message);
        }
      };


    useEffect(() => { document.body.style.backgroundColor = 'rgb(99, 39, 120)' }, [])

	function clearAllCookies() {
		const cookies = document.cookie.split(';');
	  
		for (let i = 0; i < cookies.length; i++) {
		  const cookie = cookies[i];
		  const eqPos = cookie.indexOf('=');
		  const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
		}
	  }
	  

	const handleLogout = async() =>{

		console.log("here")


		try {
			const response = await fetch('http://127.0.0.1:8000/api/logout', {
			  method: 'POST',
			  headers: {
				'Content-Type': 'application/json',
			  },
			});
			
			if (response.ok) {
			  // Login successful, redirect to a dashboard or home page
			  console.log('SUCCESSFUL LOGOUT');
			  clearAllCookies()

            
              
			  Router.push('/')
			
			
			  
			} else {
			  // Handle login error
			  console.error('Login failed');
			}
		  } catch (error) {
			console.error('Error occurred:', error);
		  }


	}

	const renderContent = () => {
		console.log(loggedIn)
		if (loggedIn == true) {
			return(

				<div className="topheader-right">
				<a href="#" onClick={handleLogout} title="logout"><i className="fa fa-sign-out" aria-hidden="true"></i>Logout</a>
				</div>
			)
			
			} else
			{
				<div className="topheader-right">
				<a href="#" title="Login"><i className="fa fa-sign-out" aria-hidden="true"></i>Login</a>
				<a href="#" title="Register">Register</a>
				</div>
			}
	  };
    
	
    
    return (
        <div>
            <Head>
            <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css' rel='stylesheet'></link>

                <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700" rel="stylesheet" type="text/css"></link>
                <link href="https://fonts.googleapis.com/css?family=Niconne" rel="stylesheet" type="text/css"></link>
                
                <link href="https://fonts.googleapis.com/css?family=Roboto:400,900,300,300italic,500,700" rel="stylesheet" type="text/css"></link>
                <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/images//apple-touch-icon-114x114-precomposed.png"></link>

                <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/images//apple-touch-icon-72x72-precomposed.png"></link>

                <link rel="apple-touch-icon-precomposed" href="/images//apple-touch-icon-57x57-precomposed.png"></link>


                
                <link rel="stylesheet" type="text/css" href="/libraries/Stroke-Gap-Icon/stroke-gap-icon.css"></link>

                <link rel="stylesheet" type="text/css" href="/css/plugins.css"></link>
                <link rel="stylesheet" type="text/css" href="/css/navigation-menu.css"></link>

                <link rel="stylesheet" type="text/css" href="/libraries/lib.css"></link>
                <link rel="stylesheet" type="text/css" href="/edu/style.css"></link>
                <link rel="stylesheet" type="text/css" href="/css/shortcode.css"></link>
				
                <link rel="stylesheet" href="/mycss/myprofile.css"></link>
                

                

				

				


				

                
            </Head>

            <div>
            
	
            <header className="header-main container-fluid no-padding">
		
		<div className="top-header container-fluid no-padding">
			<div className="container">
				<div className="topheader-left">
					<a href="tel:+5198759822" title="5198759822"><i className="fa fa-mobile" aria-hidden="true"></i>(519) - 875 - 9822 </a>
					<a href="mailto:Support@info.com" title="Support@info.com"><i className="fa fa-envelope-o" aria-hidden="true"></i>Emailus: Support@info.com</a>
				</div>


				{renderContent()}
				
				
			</div>
		</div>
		
	</header>
	
	<div className="container blog">
		<div className=""></div>

<form onSubmit={handleSubmit}>
        <div className='snippet-body'>
<div className="container rounded bg-white mt-5 mb-5">
    <div className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/>
                <span className="font-weight-bold">{userData.username}</span><span className="text-black-50">{userData.email}</span><span> </span></div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels">Name</label>
					<input type="text" name="username" className="form-control" placeholder="first name" value={formData.username} onChange={handleChange} /></div>
                    <div className="col-md-6"><label className="labels">Surname</label>
					<input type="text" name="lastname"  className="form-control" value={formData.last_name} placeholder="surname"  onChange={handleChange} /></div>
                </div>
		
        
        
        
        
        
        
        
        
        
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">Mobile Number</label>
					<input type="text" name="mobile_number" value={formData.mobile_number} className="form-control" placeholder="enter phone number" onChange={handleChange} /></div>
                    <div className="col-md-12"><label className="labels">Address Line 1</label>
					<input type="text" name="addressLine1" value={formData.addressLine1} className="form-control" placeholder="enter address line 1" onChange={handleChange} /></div>
                    <div className="col-md-12"><label className="labels">Address Line 2</label>
					<input type="text" name="addressLine2" value={formData.addressLine2} className="form-control" placeholder="enter address line 2" onChange={handleChange} /></div>
                    <div className="col-md-12"><label className="labels">Postcode</label>
					<input type="text" name="postcode" value={formData.postcode} className="form-control" placeholder="enter address line 2" onChange={handleChange} /></div>
                    <div className="col-md-12"><label className="labels">State</label>
					<input type="text" name="state" value={formData.state} className="form-control" placeholder="enter address line 2" onChange={handleChange} /></div>
                    <div className="col-md-12"><label className="labels">Area</label><input type="text" className="form-control" name="area" value={formData.area} placeholder="enter address line 2" onChange={handleChange} /></div>
                    <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" name="email" value={formData.email} placeholder="enter email id" onChange={handleChange} /></div>
                    <div className="col-md-12"><label className="labels">Education</label><input type="text" className="form-control" name="education" value={formData.education} placeholder="education" onChange={handleChange} /></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control"  name="country" value={userData.country} placeholder="country" onChange={handleChange}  /></div>
                    <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control"  value={userData.state} onChange={handleChange}  placeholder="state" /></div>
                </div>
                <div className="mt-5 text-center"><input type="submit" className="btn btn-primary profile-button" value="Save Profile"></input></div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i><a href="blog-post">&nbsp;Back Home</a></span></div>
                <div className="col-md-12"><label className="labels">Experience in Designing</label>
				<input type="text" className="form-control" placeholder="experience" value=""/></div> 
                <div className="col-md-12"><label className="labels">Additional Details</label>
				<input type="text" className="form-control" placeholder="additional details" value=""/></div>
            </div>
        </div>
    </div>
</div>


</div>
</form>


		
		<div className="section-padding"></div>
	</div>
	
	<footer className="footer-main footer2 container-fluid no-padding">	
		
		<div className="container">
			<div className="row">
				<div className="col-md-3 col-sm-6">
					<aside className="ftr-widget about_widget">
						<a className="footer-logo" href="#" title="Logo"><img alt="logo" src="images/logo.png"/>Edumax<span>Education of Best</span></a>
						<span>Marsh mallow muffin souffle jelly-o tart cake Marshmallow macaroon jelly jubes tiramisu lites halsat croissant cake.</span>
						<p><span className="icon icon-Plaine"></span>Address : 44 New Design Street, Melbourne 005</p>
						<p><span className="icon icon-Phone2"></span>Phone : <a title="01800433633" href="tel:+01800433633">(01) 800 433 633</a></p>
						<p><span className="icon icon-Mail"></span>Email : <a title="info@Example.com" href="mailto:info@Example.com">info@Example.com</a></p>
					</aside>
				</div>
				
				<div className="col-md-3 col-sm-6">
					<aside className="ftr-widget flickr_widget">
						<h3 className="widget-title">Our Flicker</h3>
							<div className="flickr-box">
								<img src="images/flick-rpost1.jpg" alt="flick-rpost1" width="62" height="62"/>
								<p>New Science Research<span>05th May 2016</span></p>
							</div>
							<div className="flickr-box">
								<img src="images/flick-rpost2.jpg" alt="flick-rpost2" width="62" height="62"/>
								<p>How White Is Too White?<span>05th May 2016</span></p>
							</div>
							<div className="flickr-box">
								<img src="images/flick-rpost3.jpg" alt="flick-rpost3" width="62" height="62"/>
								<p>New York Schools Wonder:<span>05th May 2016</span></p>
							</div>
					</aside>
				</div>
				<div className="col-md-3 col-sm-6">
					<aside className="ftr-widget newsletter_widget">
						<h3 className="widget-title">News Letters</h3>
						<p>Subscribe Our Newsletter get the Important News. The Amazing Offers & Inside Scoops:</p>
						 <div className="input-group">
							<input type="text" className="form-control" placeholder="Enter your email"/>
							<span className="input-group-btn"><button className="btn" type="button" title="Go">Go</button></span>
						</div>
						<ul>
							<li><a href="#" title="Facebook"><i className="fa fa-facebook"></i></a></li>
							<li><a href="#" title="Twitter"><i className="fa fa-twitter"></i></a></li>
							<li><a href="#" title="Google Plus"><i className="fa fa-google-plus"></i></a></li> 
							<li><a href="#" title="Behance"><i className="fa fa-behance" aria-hidden="true"></i></a></li>
							<li><a href="#" title="Dribbble"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
						</ul>
					</aside>
				</div>
			</div>
			
			<div className="footer-bottom col-md-12 col-sm-12 no-padding">
				<div className="copyright no-padding">
					<span>Copyright &copy; 2016. All Rights Reserved.</span>
				</div>
				<nav className="navbar ow-navigation">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar2" aria-expanded="false" aria-controls="navbar">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
					</div>
					<div id="navbar2" className="navbar-collapse collapse">
						<ul className="nav navbar-nav">
							<li><a href="index.html" title="Home">Home</a></li>
							<li><a href="courses-page.html" title="Courses">Courses</a></li>
							<li><a href="events-page.html" title="Events">Events</a></li>
							<li><a href="about-page.html" title="About">About</a></li>
							<li><a href="blog-page.html" title="Blog">Blog</a></li>
							<li><a href="contactus-page.html" title="Contact">Contact</a></li>
							
						</ul>
					</div>
				</nav>
			</div>
		</div>
	</footer>
	

            </div>
    </div>   
    );
}

export async function getServerSideProps(context) {
	try {
	  const cookies = parseCookies(context.req); // Parse the cookies from the incoming request
	  const username = cookies['username'] || null; // Access the specific cookie by name
      const email = cookies['email'] || null;
      const jwt = cookies['jwt'] || null;
	  let loggedIn
      
      console.log('here is the data ', jwt);
      //document.cookie = `jwt=${jwt}`;

      

          //console.log("here is "+document.cookie)
       const response = await fetch('http://127.0.0.1:8000/api/userprofile', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({'jwt':jwt}),
          });
    const userData = await response.json();
      console.log(userData)
      //return { props: { userData } };

	  if(username != undefined){
		loggedIn = true 
	  }
	  if(username == undefined){
		return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
	  }
	  return {
		props: {
			username,
            email,
			loggedIn,
            userData
		},
	  };
	} catch (error) {
	  return {
		props: {
			username: null,
			loggedIn:true,
		},
	  };
	}
  }
  
  // Function to parse cookies from the request object
  const parseCookies = (req) => {
	return req.headers.cookie.split(';').reduce((cookies, cookie) => {
	  const [name, value] = cookie.trim().split('=');
	  cookies[name] = decodeURIComponent(value);
	  return cookies;
	}, {});
  };
  
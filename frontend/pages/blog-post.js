import { getCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Head from 'next/head';
import { useEffect } from 'react';
import Router from 'next/router'
export default function blognew( {username,email,loggedIn} ) {


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


                <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700" rel="stylesheet" type="text/css"></link>
                <link href="https://fonts.googleapis.com/css?family=Niconne" rel="stylesheet" type="text/css"></link>
                
                <link href="https://fonts.googleapis.com/css?family=Roboto:400,900,300,300italic,500,700" rel="stylesheet" type="text/css"></link>
                <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/images//apple-touch-icon-114x114-precomposed.png"></link>

                <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/images//apple-touch-icon-72x72-precomposed.png"></link>

                <link rel="apple-touch-icon-precomposed" href="/images//apple-touch-icon-57x57-precomposed.png"></link>


                <link rel="stylesheet" type="text/css" href="/libraries/lib.css"></link>
                <link rel="stylesheet" type="text/css" href="/libraries/Stroke-Gap-Icon/stroke-gap-icon.css"></link>

                <link rel="stylesheet" type="text/css" href="/css/plugins.css"></link>
                <link rel="stylesheet" type="text/css" href="/css/navigation-menu.css"></link>

                    
                <link rel="stylesheet" type="text/css" href="/edu/style.css"></link>
                <link rel="stylesheet" type="text/css" href="/css/shortcode.css"></link>
				
				

				


				

                
            </Head>

            <div>
            
	<div id="" className="">
		<div className="loader">
			<div className="loader-inner ball-clip-rotate">
				<div></div>
			</div>
		</div>
	</div>
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
		<div className="menu-block container-fluid no-padding">
			
			<div className="container">
				<div className="row">
					
					<nav className="navbar ow-navigation">
						<div className="col-md-3">
							<div className="navbar-header">
								<button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
								<a title="Logo" href="index.html" className="navbar-brand"><img src="images/logo.png" alt="logo"/>Edumax<span>Education of Best</span></a>
								<a href="index.html" className="mobile-logo" title="Logo"><h3>Edumax</h3></a>
							</div>
						</div>
						<div className="col-md-9">
							<div className="navbar-collapse collapse" id="navbar">
								<ul className="nav navbar-nav menubar">
									<li className="dropdown">
										<a aria-expanded="false" aria-haspopup="true" href="index.html" role="button" className="dropdown-toggle" title="Home">Home</a>
										<i className="ddl-switch fa fa-angle-down"></i>
										<ul className="dropdown-menu">
											<li><a title="Home 2" href="home2.html">Home 2</a></li>
										</ul>
									</li>
									<li className="dropdown">
										<a aria-expanded="false" aria-haspopup="true" role="button" className="dropdown-toggle" title="Courses" href="courses-page.html">Courses</a>
										<i className="ddl-switch fa fa-angle-down"></i>
										<ul className="dropdown-menu">
											<li><a title="Courses Detail" href="coursesdetails-page.html">Courses Detail</a></li>
										</ul>
									</li>
									<li><a title="Event" href="events-page.html">Event</a></li>
									<li><a title="About" href="about-page.html">About</a></li>
									<li className="dropdown active">
										<a aria-expanded="false" aria-haspopup="true" role="button" className="dropdown-toggle" title="Blog" href="blog-page.html">Blog</a>
										<i className="ddl-switch fa fa-angle-down"></i>
										<ul className="dropdown-menu">
											<li><a title="Blog Post" href="blogpost-page.html">Blog Post</a></li>
										</ul>
									</li>
									<li className="dropdown">
										<a aria-expanded="false" aria-haspopup="true" role="button" className="dropdown-toggle" title="Pages" href="#">Pages</a>
										<i className="ddl-switch fa fa-angle-down"></i>
										<ul className="dropdown-menu">
											<li><a title="Home 2" href="home2.html">Home 2</a></li>
											<li><a title="Course Detail" href="coursesdetails-page.html">Course Detail</a></li>
											<li><a title="BlogPost" href="blogpost-page.html">BlogPost</a></li>
										</ul>
									</li>
									<li><a title="Contact" href="contactus-page.html">Contact</a></li>
								</ul>
							</div>
						</div>
					</nav>
					<div className="menu-search">
						<div id="sb-search" className="sb-search">
							<form>
								<input className="sb-search-input" placeholder="Enter your search term..." type="text" value="" name="search" id="search" />
								<button className="sb-search-submit"><i className="fa fa-search"></i></button>
								<span className="sb-icon-search"></span>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
	<div className="container-fluid no-padding pagebanner">
		<div className="container">
			<div className="pagebanner-content">
				<h3> Hello {username} ({email})</h3>
				<ol className="breadcrumb">
					<li><a href="myprofilenew">My Profile</a></li>
					<li>Blog</li>
				</ol>
			</div>
		</div>
	</div>
	<div className="container blog">
		<div className="section-padding"></div>
		<div className="row">
			<div className="col-md-9 col-sm-8 content-area">
				<article className="type-post">
					<div className="entry-cover">
						<a title="Cover" href="blogpost-page.html"><img width="860" height="470" alt="latestnews" src="images/blog1.jpg"/></a>
					</div>
					<div className="entry-block">
						<div className="entry-contentblock">
							<div className="entry-meta">
								<span className="postby">By : <a href="#" title="Andreanne Turcotte"> Andreanne Turcotte</a></span>
								<span className="postcatgory">Category : <a href="#" title="News Posted"> News Posted</a></span>
								<span className="postdate">Date : <a href="#" title="25th May 2016"> 25th May 2016</a></span>
							</div>
							<div className="entry-block">
								<div className="entry-title">
									<a title="Along Communicate Directly With Experienced Teachers" href="blogpost-page.html"><h3>Along Communicate Directly With Experienced Teachers</h3></a>
								</div>
								<div className="entry-content">
									<p>As with most professions today, there are rapid developments in teaching that are being driven by social and technological changes. Keeping up to date with these developments within education will Parental involvement enhances student success.</p>
								</div>
							</div>
							<a href="detail-blog-post" title="Read More">Read More</a>
						</div>
						<div className="post-ic"><span className="icon icon-Pencil"></span></div>
					</div>
				</article>
				<article className="type-post">
					<div className="entry-cover">
						<a title="Cover" href="blogpost-page.html"><img width="860" height="470" alt="latestnews" src="images/blog2.jpg"/></a>
					</div>
					<div className="entry-block">
						<div className="entry-contentblock">
							<div className="entry-meta">
								<span className="postby">By : <a href="#" title="Andreanne Turcotte"> Andreanne Turcotte</a></span>
								<span className="postcatgory">Category : <a href="#" title="News Posted"> News Posted</a></span>
								<span className="postdate">Date : <a href="#" title="25th May 2016"> 25th May 2016</a></span>
							</div>
							<div className="entry-block">
								<div className="entry-title">
									<a title="Tips to Succeed in an Online Course" href="blogpost-page.html"><h3>Tips to Succeed in an Online Course</h3></a>
								</div>
								<div className="entry-content">
									<p>As with most professions today, there are rapid developments in teaching that are being driven by social and technological changes. Keeping up to date with these developments within education will Parental involvement enhances student success.</p>
								</div>
							</div>
							<a href="detail-blog-post" title="Read More">Read More</a>
						</div>
						<div className="post-ic"><span className="icon icon-Pencil"></span></div>
					</div>
				</article>
				<article className="type-post">
					<div className="entry-cover">
						<a title="Cover" href="blogpost-page.html"><img width="860" height="470" alt="latestnews" src="images/blog3.jpg"/></a>
					</div>
					<div className="entry-block">
						<div className="entry-contentblock">
							<div className="entry-meta">
								<span className="postby">By : <a href="#" title="Andreanne Turcotte"> Andreanne Turcotte</a></span>
								<span className="postcatgory">Category : <a href="#" title="News Posted"> News Posted</a></span>
								<span className="postdate">Date : <a href="#" title="25th May 2016"> 25th May 2016</a></span>
							</div>
							<div className="entry-block">
								<div className="entry-title">
									<a title="Research Works of Students To Be Starts" href="blogpost-page.html"><h3>Research Works of Students To Be Starts</h3></a>
								</div>
								<div className="entry-content">
									<p>As with most professions today, there are rapid developments in teaching that are being driven by social and technological changes. Keeping up to date with these developments within education will Parental involvement enhances student success.</p>
								</div>
							</div>
							<a href="blogpost-page.html" title="Read More">Read More</a>
						</div>
						<div className="post-ic"><span className="icon icon-Pencil"></span></div>
					</div>
				</article>
				<article className="type-post">
					<div className="entry-cover">
						<a title="Cover" href="blogpost-page.html"><img width="860" height="470" alt="latestnews" src="images/blog4.jpg"/></a>
					</div>
					<div className="entry-block">
						<div className="entry-contentblock">
							<div className="entry-meta">
								<span className="postby">By : <a href="#" title="Andreanne Turcotte"> Andreanne Turcotte</a></span>
								<span className="postcatgory">Category : <a href="#" title="News Posted"> News Posted</a></span>
								<span className="postdate">Date : <a href="#" title="25th May 2016"> 25th May 2016</a></span>
							</div>
							<div className="entry-block">
								<div className="entry-title">
									<a title="Learn English Through Funny News" href="blogpost-page.html"><h3>Learn English Through Funny News</h3></a>
								</div>
								<div className="entry-content">
									<p>As with most professions today, there are rapid developments in teaching that are being driven by social and technological changes. Keeping up to date with these developments within education will Parental involvement enhances student success.</p>
								</div>
							</div>
                            {/* <Link to="/blogpost-page">Read More</Link> */}
							<a href="blogpost-page.html" title="Read More">Read More</a>
						</div>
						<div className="post-ic"><span className="icon icon-Pencil"></span></div>
					</div>
				</article>
				<article className="type-post">
					<div className="entry-cover">
						<a title="Cover" href="blogpost-page.html"><img width="860" height="470" alt="latestnews" src="images/blog5.jpg"/></a>
					</div>
					<div className="entry-block">
						<div className="entry-contentblock">
							<div className="entry-meta">
								<span className="postby">By : <a href="#" title="Andreanne Turcotte"> Andreanne Turcotte</a></span>
								<span className="postcatgory">Category : <a href="#" title="News Posted"> News Posted</a></span>
								<span className="postdate">Date : <a href="#" title="25th May 2016"> 25th May 2016</a></span>
							</div>
							<div className="entry-block">
								<div className="entry-title">
									<a title="Why You Should Read Every Day" href="blogpost-page.html"><h3>Why You Should Read Every Day</h3></a>
								</div>
								<div className="entry-content">
									<p>As with most professions today, there are rapid developments in teaching that are being driven by social and technological changes. Keeping up to date with these developments within education will Parental involvement enhances student success.</p>
								</div>
							</div>
							<a href="blogpost-page.html" title="Read More">Read More</a>
						</div>
						<div className="post-ic"><span className="icon icon-Pencil"></span></div>
					</div>
				</article>
				<nav className="ow-pagination">
					<ul className="pagination">
						<li className="active"><a href="#">1</a></li>
						<li><a href="#">2</a></li>
						<li><a href="#">Next</a></li>
					</ul>
				</nav>
			</div>
			<div className="col-md-3 col-sm-4 widget-area">
				<aside className="widget widget_categories">
					<h3 className="widget-title">Categories</h3>
					<ul>
						<li><a title="Language Science" href="#">Language Science</a><span>(10)</span></li>
						<li><a title="Student Guidance" href="#">Student Guidance</a><span>(12)</span></li>
						<li><a title="School Psychology" href="#">School Psychology</a><span>(08)</span></li>
						<li><a title="Vocational Counselling" href="#">Vocational Counselling	</a><span>(18)</span></li>
						<li><a title="Uncategorized" href="#">Uncategorized</a><span>(11)</span></li>
						<li><a title="Youth Science" href="#">Youth Science</a><span>(10)</span></li>
					</ul>
				</aside>
				<aside className="widget widget_latestnews">
					<h3 className="widget-title">Latest Blogs</h3>
					<div className="latestnews-box">
						<a href="blogpost-page.html" title="Along Communicate Directly With Experienced Teachers">Along Communicate Directly With Experienced Teachers</a>
						<span>25th May 2016</span>
					</div>
					<div className="latestnews-box">
						<a href="blogpost-page.html" title="Given The Tips To Students Succed In An Online Courses ">Given The Tips To Students Succed In An Online Courses </a>
						<span>25th May 2016</span>
					</div>
					<div className="latestnews-box">
						<a href="blogpost-page.html" title="Why Should Read Every Day">Why Should Read Every Day</a>
						<span>25th May 2016</span>
					</div>
				</aside>
				<aside className="widget courses-staff">
					<img src="images/staff.jpg" alt="staff" width="275" height="288"/>
					<h3>Charlie Brown</h3>
					<span>Web Designer</span>
					<p>My name is Ruth. I grew up and studied in...</p>
				</aside>
			</div>
		</div>
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
					<aside className="ftr-widget useful-llink">
						<h3 className="widget-title">Usefull Links</h3>
						<ul>
							<li><a href="about-page.html" title="About">About</a></li>
							<li><a href="#" title="Careers">Careers</a></li>
							<li><a href="#" title="Main Events">Main Events</a></li>
							<li><a href="#" title="Become a Teacher">Become a Teacher</a></li>
							<li><a href="blog-page.html" title="Latest Blogs">Latest Blogs</a></li>
							<li><a href="contactus-page.html" title="Contact us">Contacs</a></li>
						</ul>
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
	  const username = cookies['username'] || null;
	  const email    =    cookies['email'] ; // Access the specific cookie by name
	  let loggedIn
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
			loggedIn
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
  
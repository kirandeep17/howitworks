import { getCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Head from 'next/head';

export default function Loginnew( {username} ) {
    const router = useRouter()
    const { msg } = router.query
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
            
            <header className="header-main container-fluid no-padding">
            <div className="top-header container-fluid no-padding">
                <div className="container">
                    <div className="topheader-left">
                        <a href="tel:+5198759822" title="5198759822"><i className="fa fa-mobile" aria-hidden="true"></i>(519) - 875 - 9822 </a>
                        <a href="mailto:Support@info.com" title="Support@info.com"><i className="fa fa-envelope-o" aria-hidden="true"></i>Emailus: Support@info.com</a>
                    </div>
                    <div className="topheader-right">
                        <a href="/loginnew" title="Login"><i className="fa fa-sign-out" aria-hidden="true"></i>Login</a>
                        <a href="/register" title="Register">Register</a>
                    </div>
                </div>
		    </div>

            <div className="menu-block container-fluid no-padding">
			
			<div className="container">
				<div className="row">
					
					<nav className="navbar ow-navigation ">
						<div className="col-md-3">
							<div className="navbar-header ">
								<button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
								<a title="Logo" href="home" className="navbar-brand"><img src="images/logo.png" alt="logo"/>How IT Works<span>Education of Best</span></a>
								<a href="index.html" className="mobile-logo" title="Logo"><h3>Edumax</h3></a>
							</div>
						</div>
						<div className="col-md-9">
							<div className="navbar-collapse collapse" id="navbar">
								<ul className="nav navbar-nav menubar">
									<li className="dropdown active">
										<a aria-expanded="false" aria-haspopup="true" href="index.html" role="button" className="dropdown-toggle" title="Home">Home</a>
										<i className="ddl-switch fa fa-angle-down"></i>
										<ul className="dropdown-menu">
											<li><a title="Home 2" href="home2.html">Home 2</a></li>
										</ul>
									</li>
									
									<li><a title="Event" href="events-page.html">Event</a></li>
									<li><a title="About" href="about-page.html">About</a></li>
									<li className="dropdown">
										<a aria-expanded="false" aria-haspopup="true" role="button" className="dropdown-toggle" title="Blog" href="blog-page.html">Blog</a>
										<i className="ddl-switch fa fa-angle-down"></i>
										<ul className="dropdown-menu">
											<li><a title="Blog Post" href="blog-post">Blog Post</a></li>
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
            
			<div className="photoslider-section photoslider2 container-fluid no-padding">
		<div id="home-slider2" className="carousel slide" data-ride="carousel">
			<div className="carousel-inner" role="listbox">
				<div className="item active">
					<img src="images/photoslider1.jpg" alt="photoslider1" width="1920" height="801"/>
					<div className="carousel-caption">
						<div className="container">
							<div className="col-md-6 col-sm-8 col-xs-8 ow-pull-right no-padding">
								<h4 data-animation="animated bounceInLeft">Welcome</h4>
								<h3 data-animation="animated fadeInDown">To Our<span>BLOG Site</span></h3>
								<p data-animation="animated bounceInRight">We belive nothing is more important than learning. The best learning Website Blog</p>
								<a href="#" title="Learn More" data-animation="animated zoomInUp">Learn More</a>
							</div>
						</div>
					</div>
				</div>
				<div className="item">
					<img src="images/photoslider2.jpg" alt="photoslider2" width="1920" height="801"/>
					<div className="carousel-caption">
						<div className="container">
							<div className="col-md-6 col-sm-8 col-xs-8 ow-pull-left no-padding">
								<h4 data-animation="animated bounceInLeft">Welcome</h4>
								<h3 data-animation="animated fadeInDown">To Our<span>University</span></h3>
								<p data-animation="animated bounceInRight">We belive nothing is more important than education. The best learning institution</p>
								<a href="#" title="Learn More" data-animation="animated zoomInUp">Learn More</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<a className="left carousel-control" href="#home-slider" role="button" data-slide="prev">
				<i className="fa fa-angle-left"></i>
			</a>
			<a className="right carousel-control" href="#home-slider" role="button" data-slide="next">
				<i className="fa fa-angle-right"></i>
			</a>
		</div>
	</div>

			<div class="container eventblock">
		<div class="section-padding"></div>
		<div class="row">
			<div class="col-md-5 col-sm-12">
				<div class="eventcourse-categories">
					<div class="section-header">
						<h3>Education <span> Course Categories</span></h3>
						<p>Follow us for join our events</p>
					</div>
					<p>World Largest books and library center is here where you can study the latest trends of the education.If you want to build a successful business online, watch the promo video to see why 13,000+ students are using this online entrepreneurship course to learn.</p>
					<a href="#" title="Learn More">Learn More</a>
				</div>
				<div class="video-block video-small">
					<a title="Paly Video" class="popup-youtube" href="http://www.youtube.com/watch?v=0O2aH4XLbto"><i class="fa fa-play" aria-hidden="true"></i></a>
					<img  src="images/video-poster.jpg" width="480" height="320" alt="Video Poster"/>
					<div class="video-content">
						<h3>Your Career Starts Here</h3>
						<p>Achieving the desired success requires patience and persistence.</p>
					</div>
				</div>
			</div>
			<div class="col-md-7 col-sm-12">
				<div class="event-section event2-section">
					<div class="event-block">
						<div class="event-box">	
							<div class="eventcontent-box">
								<span class="event-index">01</span>
								<h3><a href="#" title="Science In The New Era">Science In The New Era</a></h3>
								<div class="event-meta">
									<span><i aria-hidden="true" class="fa fa-clock-o"></i>8:00 Am - 5:00 Pm</span>
									<span><i aria-hidden="true" class="fa fa-map-marker"></i>London, UK</span>
								</div>
								<p>On the other hand, we denounce with elites righteous indignation. and men.</p>
							</div>
							<img src="images/event2.1.jpg" alt="event2.1" width="200" height="130"/>
						</div>
						<div class="event-box">	
							<span class="event-index">02</span>
							<div class="eventcontent-box">
								<h3><a href="#" title="The Ecosystem Within Us">The Ecosystem Within Us</a></h3>
								<div class="event-meta">
									<span><i aria-hidden="true" class="fa fa-clock-o"></i>8:00 Am - 5:00 Pm</span>
									<span><i aria-hidden="true" class="fa fa-map-marker"></i>London, UK</span>
								</div>
								<p>On the other hand, we denounce with elites righteous indignation. and men.</p>
							</div>
							<img src="images/event2.2.jpg" alt="event2.2" width="200" height="130"/>
						</div>
						<div class="event-box">	
							<span class="event-index">03</span>
							<div class="eventcontent-box">
								<h3><a href="#" title="How To Sell Anything">How To Sell Anything</a></h3>
								<div class="event-meta">
									<span><i aria-hidden="true" class="fa fa-clock-o"></i>8:00 Am - 5:00 Pm</span>
									<span><i aria-hidden="true" class="fa fa-map-marker"></i>London, UK</span>
								</div>
								<p>On the other hand, we denounce with elites righteous indignation. and men.</p>
							</div>
							<img src="images/event2.3.jpg" alt="event2.3" width="200" height="130"/>
						</div>
						<a href="events-page.html" title="View All Events">View All Events</a>
					</div>
				</div>
			</div>
		</div>
		<div class="section-padding"></div>
	</div>



	<div class="container-fluid no-padding searchcourses">
		<div class="container">	
			<div class="search-content">
				<div class="searchcourses-block">
					<h3>Over 3,000+ students trust us world wide. Get free online courses tips, Subscribe us</h3>
				</div>
				<div class="course-search-block">
					<div class="col-md-3 col-sm-3 col-xs-6">
						<select class="selectpicker">
							<option>All Categories</option>
							<option>Categories 1</option>
							<option>Categories 2</option>
							<option>Categories 3</option>
						</select>
					</div>
					<div class="col-md-3 col-sm-3 col-xs-6">
						<select class="selectpicker">
							<option>Course Level</option>
							<option>Level 1</option>
							<option>Level 2</option>
							<option>Level 3</option>
						</select>
					</div>
					<div class="col-md-6 col-sm-6  col-xs-12 search_box">
						<div class="input-group">
							<input type="text" class="form-control" placeholder="Course Keyword . . . "/>
							<span class="input-group-btn">
								<button class="btn" type="button" title="Search courses">Search courses</button>
							</span>
						</div>
					</div>
				</div>
				<div class="search-categories">
					<div class="col-md-3 col-sm-3 col-xs-6">
						<p><i class="fa fa-graduation-cap" aria-hidden="true"></i><span>Over 500 students Enrolled Learn Skills</span></p>
					</div>
					<div class="col-md-3 col-sm-3 col-xs-6">
						<p><i class="fa fa-paper-plane-o" aria-hidden="true"></i><span>More than 300+ Online Courses Available</span></p>
					</div>
					<div class="col-md-3 col-sm-3 col-xs-6">
						<p><i class="fa fa-tencent-weibo" aria-hidden="true"></i><span>Learn Skills on any Devices anytime</span></p>
					</div>
					<div class="col-md-3 col-sm-3 col-xs-6">
						<p><i class="fa fa-user-md" aria-hidden="true"></i><span>More than 320 Instructors Available</span></p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container welcome-section">
		<div class="section-padding"></div>
		<div class="section-header">
			<h3>Popular <span>Courses</span></h3>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
		</div>
		<div class="row">
			<div class="col-md-4 col-sm-6 col-xs-6">
				<div class="welcome-box">
					<img src="images/welcome1.jpg" alt="welcome1" width="370" height="440"/>
					<div class="welcome-title">
						<h3>Political science</h3>
					</div>	
					<div class="welcome-content">
						<span>(Peter Parker)</span>
						<p>Then one day he was shootinsome  When the against him bubblin</p>
						<ul class="course-detail">
							<li><i class="fa fa-calendar" aria-hidden="true"></i>Course duration : <span>3 Yr</span></li>
							<li><i class="fa fa-graduation-cap" aria-hidden="true"></i>Degree Level : <span>Master’s Degree</span></li>
						</ul>
						<ul class="course-rating">
							<li><a href="#" title="1 Star"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
							<li><a href="#" title="2 Star"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
							<li><a href="#" title="3 Star"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
							<li><a href="#" title="4 Star"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
							<li><a href="#" title="5 Star"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
						</ul>
						<a href="coursesdetails-page.html" title="Apply now">Apply now</a>
					</div>
				</div>
			</div>
			<div class="col-md-4 col-sm-6 col-xs-6">
				<div class="welcome-box">
					<img src="images/welcome2.jpg" alt="welcome2" width="370" height="440"/>
					<div class="welcome-title">
						<h3>Micro Biology</h3>
					</div>	
					<div class="welcome-content">
						<span>(Peter Parker)</span>
						<p>Then one day he was shootinsome  When the against him bubblin</p>
						<ul class="course-detail">
							<li><i class="fa fa-calendar" aria-hidden="true"></i>Course duration : <span>3 Yr</span></li>
							<li><i class="fa fa-graduation-cap" aria-hidden="true"></i>Degree Level : <span>Master’s Degree</span></li>
						</ul>
						<ul class="course-rating">
							<li><a href="#" title="1 Star"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
							<li><a href="#" title="2 Star"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
							<li><a href="#" title="3 Star"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
							<li><a href="#" title="4 Star"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
							<li><a href="#" title="5 Star"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
						</ul>
						<a href="coursesdetails-page.html" title="Apply now">Apply now</a>
					</div>
				</div>
			</div>
			<div class="col-md-4 col-sm-6 col-xs-6">
				<div class="welcome-box">
					<img src="images/welcome3.jpg" alt="welcome3" width="370" height="440"/>
					<div class="welcome-title">
						<h3>Computer Science</h3>
					</div>	
					<div class="welcome-content">
						<span>(Peter Parker)</span>
						<p>Then one day he was shootinsome  When the against him bubblin</p>
						<ul class="course-detail">
							<li><i class="fa fa-calendar" aria-hidden="true"></i>Course duration : <span>3 Yr</span></li>
							<li><i class="fa fa-graduation-cap" aria-hidden="true"></i>Degree Level : <span>Master’s Degree</span></li>
						</ul>
						<ul class="course-rating">
							<li><a href="#" title="1 Star"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
							<li><a href="#" title="2 Star"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
							<li><a href="#" title="3 Star"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
							<li><a href="#" title="4 Star"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
							<li><a href="#" title="5 Star"><i class="fa fa-star-o" aria-hidden="true"></i></a></li>
						</ul>
						<a href="coursesdetails-page.html" title="Apply now">Apply now</a>
					</div>
				</div>
			</div>
		</div>
		<div class="section-padding"></div>
	</div>
	<div class="container-fluid no-padding team-section">
		<div class="section-padding"></div>
		<div class="container">
			<div class="row">
				<div class="col-md-6 col-sm-12 team-content-block">
					<div class="section-header">
						<h3>Meet <span> Our Staffs</span></h3>
						<p>Our creative and professional staffs</p>
					</div>
					<div class="team-intro">
						<p>World Largest books and library center is here where you can study the latest trends of the education.If you want to build a successful business online, watch the promo video to see why 13,000+ students are using this online entrepreneurship course to learn.</p>
					</div>
					<a class="left carousel-control" href="#team-carousel" role="button" data-slide="prev">Prev</a>
					<a class="right carousel-control" href="#team-carousel" role="button" data-slide="next">Next</a>
				</div>
				<div class="col-md-6 col-sm-12 team-gallary">
					<div id="team-carousel" class="carousel slide" data-ride="carousel">
						<div class="carousel-inner" role="listbox">
							<div class="item active">
								<div class="row">
									<div class="col-md-6 col-sm-6 col-xs-6">
										<div class="team-box">
											<ul>
												<li><a title="Facebook" href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
												<li><a title="Twitter" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
												<li><a title="Google-Pluse" href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
												<li><a title="Behance" href="#"><i class="fa fa-behance" aria-hidden="true"></i></a></li>
												<li><a title="Dribbble" href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
											</ul>
											<img alt="team1" src="images/team1.jpg" width="290" height="370"/>
											<div class="team-content">
												<h3>Martin Phillips</h3>
												<span>Executive Director</span>
											</div>
										</div>
									</div>
									<div class="col-md-6 col-sm-6 col-xs-6">
										<div class="team-box">
											<ul>
												<li><a title="Facebook" href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
												<li><a title="Twitter" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
												<li><a title="Google-Pluse" href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
												<li><a title="Behance" href="#"><i class="fa fa-behance" aria-hidden="true"></i></a></li>
												<li><a title="Dribbble" href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
											</ul>
											<img alt="team2" src="images/team2.jpg" width="290" height="370"/>
											<div class="team-content">
												<h3>Thomas Wright</h3>
												<span>Web Developer</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="item">
								<div class="row">
									<div class="col-md-6 col-sm-6 col-xs-6">
										<div class="team-box">
											<ul>
												<li><a title="Facebook" href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
												<li><a title="Twitter" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
												<li><a title="Google-Pluse" href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
												<li><a title="Behance" href="#"><i class="fa fa-behance" aria-hidden="true"></i></a></li>
												<li><a title="Dribbble" href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
											</ul>
											<img alt="team1" src="images/team1.jpg" width="290" height="370"/>
											<div class="team-content">
												<h3>Martin Phillips</h3>
												<span>Executive Director</span>
											</div>
										</div>
									</div>
									<div class="col-md-6 col-sm-6 col-xs-6">
										<div class="team-box">
											<ul>
												<li><a title="Facebook" href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
												<li><a title="Twitter" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
												<li><a title="Google-Pluse" href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
												<li><a title="Behance" href="#"><i class="fa fa-behance" aria-hidden="true"></i></a></li>
												<li><a title="Dribbble" href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
											</ul>
											<img alt="team2" src="images/team2.jpg" width="290" height="370"/>
											<div class="team-content">
												<h3>Thomas Wright</h3>
												<span>Web Developer</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="section-padding"></div>
	</div>
	<div class="container-fluid no-padding callout">
		<div class="container">
			<div class="row">
				<div class="col-md-9 col-sm-9 col-xs-8 callout-content">
					<h3>Become an instructor</h3>
					<p>Join thousand of instructors and earn money hassle free</p>
				</div>
				<div class="col-md-3 col-sm-3 col-xs-4">
					<a href="#" title="Join Now">Join Now</a>
				</div>
			</div>
		</div>
	</div>
	<div class="container-fulid no-padding latestblog-section latestblog2">
		<div class="section-padding"></div>
		<div class="container">
			<div class="section-header">
				<h3>Latest <span> Blog Post</span></h3>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
			</div>
			<div class="row">
				<div class="col-md-4 col-sm-6 col-xs-6">
					<article class="type-post">
						<div class="entry-cover">
							<a title="Cover" href="blogpost-page.html"><img width="363" height="261" alt="latestnews" src="images/latestblog1.jpg"/></a>
						</div>
						<div class="entry-block">
							<div class="entry-contentblock">
								<div class="entry-meta">
									<span class="postdate">25th May 2016</span>
									<span class="postby">Posted by <a href="#">Methov jos</a></span>
								</div>
								<div class="entry-block">
									<div class="entry-title">
										<a title="Doloremque laudantium totam..." href="blogpost-page.html"><h3>Doloremque laudantium totam...</h3></a>
									</div>
								</div>
							</div>
							<div class="post-ic"><span class="icon icon-Pencil"></span></div>
						</div>
					</article>
				</div>
				<div class="col-md-4 col-sm-6 col-xs-6">
					<article class="type-post">
						<div class="entry-cover">
							<a title="Cover" href="blogpost-page.html"><img width="363" height="261" alt="latestnews" src="images/latestblog2.jpg"/></a>
						</div>
						<div class="entry-block">
							<div class="entry-contentblock">
								<div class="entry-meta">
									<span class="postdate">25th May 2016</span>
									<span class="postby">Posted by <a href="#">Jennu Doe </a></span>
								</div>
								<div class="entry-block">
									<div class="entry-title">
										<a title="Minim veniam quis nostrud..." href="blogpost-page.html"><h3>Minim veniam quis nostrud...</h3></a>
									</div>
								</div>
							</div>
							<div class="post-ic"><span class="icon icon-MusicMixer"></span></div>
						</div>
					</article>
				</div>
				<div class="col-md-4 col-sm-6 col-xs-6">
					<article class="type-post">
						<div class="entry-cover">
							<a title="Cover" href="blogpost-page.html"><img width="363" height="261" alt="latestnews" src="images/latestblog3.jpg"/></a>
						</div>
						<div class="entry-block">
							<div class="entry-contentblock">
								<div class="entry-meta">
									<span class="postdate">25th May 2016</span>
									<span class="postby">Posted by <a href="#">Steave Smith</a></span>
								</div>
								<div class="entry-block">
									<div class="entry-title">
										<a title="Perspiciatis unde omnis iste..." href="blogpost-page.html"><h3>Perspiciatis unde omnis iste...</h3></a>
									</div>
								</div>
							</div>
							<div class="post-ic"><span class="icon icon-Starship"></span></div>
						</div>
					</article>
				</div>
			</div>
		</div>
	</div>
	<div class="container testimonial2-section">
		<div class="section-padding"></div>
		<div class="section-header">
			<h3>Our <span> Client say</span></h3>
			<p>Users reviews are the best indicator of our success.</p>
		</div>
		<div id="testimonial2" class="carousel slide" data-ride="carousel">
			<ol class="carousel-indicators">
				<li data-target="#testimonial2" data-slide-to="0" class="active"></li>
				<li data-target="#testimonial2" data-slide-to="1"></li>
				<li data-target="#testimonial2" data-slide-to="2"></li>
				<li data-target="#testimonial2" data-slide-to="3"></li>
			</ol>
			<div class="carousel-inner" role="listbox">
				<div class="item active">
					<div class="testimonialbox">
						<img src="images/testimonial2.1.jpg" width="77" height="77" alt="testimonial"/>
						<p>"We enjoy sharing the projects and posts we make just as much  enjoy creating them sit back & take a moment to browse through some of our recent work morbi accumsan ipsum velitnam tincidunt ornare odio.</p>
						<div class="testimonial-author-box">
							<i class="fa fa-quote-right" aria-hidden="true"></i>
							<h3>Rick Grimes</h3>
							<span>Project Manager</span>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="testimonialbox">
						<img src="images/testimonial2.1.jpg" width="77" height="77" alt="testimonial"/>
						<p>"We enjoy sharing the projects and posts we make just as much  enjoy creating them sit back & take a moment to browse through some of our recent work morbi accumsan ipsum velitnam tincidunt ornare odio.</p>
						<div class="testimonial-author-box">
							<i class="fa fa-quote-right" aria-hidden="true"></i>
							<h3>Rick Grimes</h3>
							<span>Project Manager</span>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="testimonialbox">
						<img src="images/testimonial2.1.jpg" width="77" height="77" alt="testimonial"/>
						<p>"We enjoy sharing the projects and posts we make just as much  enjoy creating them sit back & take a moment to browse through some of our recent work morbi accumsan ipsum velitnam tincidunt ornare odio.</p>
						<div class="testimonial-author-box">
							<i class="fa fa-quote-right" aria-hidden="true"></i>
							<h3>Rick Grimes</h3>
							<span>Project Manager</span>
						</div>
					</div>
				</div>
				<div class="item">
					<div class="testimonialbox">
						<img src="images/testimonial2.1.jpg" width="77" height="77" alt="testimonial"/>
						<p>"We enjoy sharing the projects and posts we make just as much  enjoy creating them sit back & take a moment to browse through some of our recent work morbi accumsan ipsum velitnam tincidunt ornare odio.</p>
						<div class="testimonial-author-box">
							<i class="fa fa-quote-right" aria-hidden="true"></i>
							<h3>Rick Grimes</h3>
							<span>Project Manager</span>
						</div>
					</div>
				</div>
			</div>
			
			<a class="left carousel-control" href="#testimonial2" role="button" data-slide="prev">
				<p class="index"><span class="index_prev"></span><span class="total_index"></span></p>
				<span class="arrow_left" aria-hidden="true"></span>
			</a>
			<a class="right carousel-control" href="#testimonial2" role="button" data-slide="next">
				<p class="index"><span class="index_next"></span><span class="total_index"></span></p>
				<span class="arrow_right" aria-hidden="true"></span>
			</a>
		</div>
		<div class="section-padding"></div>
	</div>
	<div class="container-fluid no-padding callout">
		<div class="container">
			<div class="row">
				<div class="col-md-9 col-sm-9 col-xs-8 callout-content">
					<h3>Best Template For Education Business</h3>
					<p>Join thousand of instructors and earn money hassle free</p>
				</div>
				<div class="col-md-3 col-sm-3 col-xs-4">
					<a href="#" title="Buy Now">Buy Now</a>
				</div>
			</div>
		</div>
	</div>
	<footer class="footer-main footer2 container-fluid no-padding">	
		
		<div class="container">
			<div class="row">
				<div class="col-md-3 col-sm-6">
					<aside class="ftr-widget about_widget">
						<a class="footer-logo" href="#" title="Logo"><img alt="logo" src="images/logo.png"/>How IT Works<span>Education of Best</span></a>
						<span>Marsh mallow muffin souffle jelly-o tart cake Marshmallow macaroon jelly jubes tiramisu lites halsat croissant cake.</span>
						<p><span class="icon icon-Plaine"></span>Address : 44 New Design Street, Melbourne 005</p>
						<p><span class="icon icon-Phone2"></span>Phone : <a title="01800433633" href="tel:+01800433633">(01) 800 433 633</a></p>
						<p><span class="icon icon-Mail"></span>Email : <a title="info@Example.com" href="mailto:info@Example.com">info@Example.com</a></p>
					</aside>
				</div>
				<div class="col-md-3 col-sm-6">	
					<aside class="ftr-widget useful-llink">
						<h3 class="widget-title">Usefull Links</h3>
						<ul>
							<li><a href="about-page.html" title="About">About</a></li>
							<li><a href="#" title="Careers">Careers</a></li>
							<li><a href="#" title="Main Events">Main Events</a></li>
							<li><a href="#" title="Become a Teacher">Become a Teacher</a></li>
							<li><a href="blog-page.html" title="Latest News">Latest News</a></li>
							<li><a href="contactus-page.html" title="Contact us">Contact us</a></li>
						</ul>
					</aside>
				</div>
				<div class="col-md-3 col-sm-6">
					<aside class="ftr-widget flickr_widget">
						<h3 class="widget-title">Our Flicker</h3>
							<div class="flickr-box">
								<img src="images/flick-rpost1.jpg" alt="flick-rpost1" width="62" height="62"/>
								<p>New Science Research<span>05th May 2016</span></p>
							</div>
							<div class="flickr-box">
								<img src="images/flick-rpost2.jpg" alt="flick-rpost2" width="62" height="62"/>
								<p>How White Is Too White?<span>05th May 2016</span></p>
							</div>
							<div class="flickr-box">
								<img src="images/flick-rpost3.jpg" alt="flick-rpost3" width="62" height="62"/>
								<p>New York Schools Wonder:<span>05th May 2016</span></p>
							</div>
					</aside>
				</div>
				<div class="col-md-3 col-sm-6">
					<aside class="ftr-widget newsletter_widget">
						<h3 class="widget-title">News Letters</h3>
						<p>Subscribe Our Newsletter get the Important News. The Amazing Offers & Inside Scoops:</p>
						 <div class="input-group">
							<input type="text" class="form-control" placeholder="Enter your email"/>
							<span class="input-group-btn"><button class="btn" type="button" title="Go">Go</button></span>
						</div>
						<ul>
							<li><a href="#" title="Facebook"><i class="fa fa-facebook"></i></a></li>
							<li><a href="#" title="Twitter"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#" title="Google Plus"><i class="fa fa-google-plus"></i></a></li> 
							<li><a href="#" title="Behance"><i class="fa fa-behance" aria-hidden="true"></i></a></li>
							<li><a href="#" title="Dribbble"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
						</ul>
					</aside>
				</div>
			</div>
			
			<div class="footer-bottom col-md-12 col-sm-12 no-padding">
				<div class="copyright no-padding">
					<span>Copyright &copy; 2016. All Rights Reserved.</span>
				</div>
				<nav class="navbar ow-navigation">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar2" aria-expanded="false" aria-controls="navbar">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
					</div>
					<div id="navbar2" class="navbar-collapse collapse">
						<ul class="nav navbar-nav">
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
        
    );
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var username = getCookie('username', { req, res });
    
    return { props: {username:false} };
};
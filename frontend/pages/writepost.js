import React, { useState,useEffect } from 'react';
import Head from 'next/head';
//import RichTextEditor from '../components/RichTextEditor';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';


const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { header: '3' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}

export default function  ThreeDEffectContainer  ()  {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isDraft, setIsDraft] = useState(true);
  const [isPublished, setIsPublished] = useState(false);
  
  const [category, setCategory] = useState('category1');
  const [description, setDescription] = useState('');
  function submitHandler(event) {
    event.preventDefault();

    const requestObj = {
      //id: new Date().toISOString(),
      title: title,
      content: content,
      isDraft: isDraft,
      isPublished: isPublished,
      description:"hello"
    };

    fetch('http://127.0.0.1:8000/api/blogPost', {
      method: 'POST',
      body: JSON.stringify(requestObj),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then((data) => {
        console.log(data.content)
      });

  }

  function handleTitleChange(event) {
    event.preventDefault();
    setTitle(event.target.value);
  }
  return (                
  
    <div>

        <Head>
                <link rel="stylesheet" href="/mycss/profilecss.css"></link>
        </Head>



        <div className="body">
			  <div className="container">
				  
			  
						<div className="kcontent">
						
							<form id="inputForm" onSubmit={submitHandler}>
								<label for="title">Title:</label>
								<input type="text" id="title" value={title}
                    onChange={(e) => setTitle(e.target.value)} placeholder="Enter the title"></input>

								<label for="category">Category:</label>
								<select id="category" value={category}
            onChange={(e) => setCategory(e.target.value) }>
								  <option value="category1">Category 1</option>
								  <option value="category2">Category 2</option>
								  <option value="category3">Category 3</option>
								</select>
								
								
								<label for="description">Description:</label>
								
                                
                                

                                
                <QuillNoSSRWrapper modules={modules} onChange={setContent} theme="snow" />


								

								<center><button className='button' type="submit">Post</button> </center>

                <div dangerouslySetInnerHTML={{ __html: content }}>

                  
                </div>
							  </form>
						
						  
						</div>
			  </div>



 </div>

        

    </div>

        


    
  );
 
};



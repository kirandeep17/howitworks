import React, { useState,useEffect } from 'react';
import Head from 'next/head';
import RichTextEditor from '../components/RichTextEditor';
const ThreeDEffectContainer = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('category1');
  const [description, setDescription] = useState('');


  const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState("");
    useEffect(() => {
        setEditorLoaded(true);
    }, []);

   


  const handleSubmit = (e) => {
    e.preventDefault();
    // Add any further logic you might need when submitting the form.
  };

  return (                
  
    <div>

        <Head>
                <link rel="stylesheet" href="/mycss/profilecss.css"></link>
        </Head>



        <div className="body">
			  <div className="container">
				  
			  
						<div className="content">
						
							<form id="inputForm" onSubmit={handleSubmit}>
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
								
                                
                                <RichTextEditor id="description"
                                    name="description"
                                    onChange={(data) => {
                                    setData(data);
                                    }}
                                    editorLoaded={editorLoaded}
                                />

                                
                                


								

								<button type="submit">Update</button>
							  </form>
						
						  
						</div>
			  </div>



 </div>

        

    </div>

        


    
  );
 
};

export default ThreeDEffectContainer;

import { useState ,useEffect} from 'react';
import TitleInput from '../components/TitleInput';
import CategorySelect from '../components/CategorySelect';
import RichTextEditor from '../components/RichTextEditor';
import axios from 'axios';

const API_URL = ''; // Replace with your Django API endpoint

const PostBlog = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('category1');
  const [description, setDescription] = useState('');


    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState("");
    useEffect(() => {
        setEditorLoaded(true);
    }, []);

    const editorStyle = {
        width: '100%', // Set the desired width here, e.g., '600px' or '50%'
        height: '400px', // Set the desired height here, e.g., '400px'
      };


  const handlePost = async () => {
    try {
      const postData = {
        title,
        category,
        description,
      };
      await axios.post(API_URL, postData);
      // Optionally, you can add a success message or redirect to a different page after posting.
      console.log('Post successful!');
    } catch (error) {
      console.error('Error posting:', error);
    }
  };

  return (
    <div>
      <TitleInput value={title} onChange={setTitle} />
      <CategorySelect value={category} onChange={setCategory} />
      <RichTextEditor
        name="description"
        onChange={(data) => {
          setData(data);
        }}
        editorLoaded={editorLoaded}
      />
       {JSON.stringify(data)}

      <input type="submit"  className="button" value="Signup"/>
    </div>
  );
};

export default PostBlog;

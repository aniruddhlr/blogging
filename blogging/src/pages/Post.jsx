import { useParams } from 'react-router-dom';

const Post = () => {
    const { id } = useParams();
    return (
        <div className="container mx-auto p-8">
            <h1 className="mb-4 text-4xl font-bold text-gray-800">Post {id}</h1>
            <p className="mb-6 text-gray-600">Author Name · Date</p>
            <div className="leading-relaxed text-gray-700">
                <p>Post content goes here...</p>
                {/* Additional paragraphs and formatting */}
            </div>
        </div>
    );
};

export default Post;

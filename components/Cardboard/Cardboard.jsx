import Button from '@mui/material/Button';

const Cardboard = ({ title, text, subText }) => {


    return (
        <div className="comment_card">
            <div>
                {title}
            </div>
            <div>
                {text}
            </div>
            <div>
                {subText}
            </div>
        </div>
    )
}

export default Cardboard;

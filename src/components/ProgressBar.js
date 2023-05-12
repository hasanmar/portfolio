import ProgressBar from 'react-bootstrap/ProgressBar';

export default function ProgressBarComponent(props) {
    return (
        <>
            <span className="highlightSkill">{props.skill}</span>
            <ProgressBar animated now={props.now} variant="warning" label={props.label} />

        </>
    )
}
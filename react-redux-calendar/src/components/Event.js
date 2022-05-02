import {Badge, Button, Card} from "react-bootstrap";

function Event({event}) {
    const {title, description, date} = event;
    return <Card className={'rounded-3'}>
        <Card.Header>
            <h3 className={'d-flex justify-content-between'}>{title}<span>{date.toDateString()}</span></h3>
        </Card.Header>
        <Card.Body>
            <h5>{description}</h5>
            {/*<h5>{complete ? 'Complete' : 'To Do'}</h5>*/}
            {/*<Button variant={'danger'} onClick={() => onDelete(id)}>Delete</Button>*/}
        </Card.Body>
        <Card.Footer>
            <div className={'d-flex justify-content-between'}>
                {/*<Button variant={'outline-danger'} onClick={() => onDelete(id)}>Delete</Button>*/}
                {/*<Button variant={'outline-primary'} onClick={() => onEdit(event)}>Edit</Button>*/}
            </div>
            {/*<Row>*/}
            {/*<Col></Col>*/}
            {/*<Col><Button variant={'outline-danger'} onClick={() => onDelete(id)}>Delete</Button></Col>*/}
            {/*<Col>{complete ? 'Complete' : 'To Do'}</Col>*/}
            {/*</Row>*/}
        </Card.Footer>
    </Card>
}

export default Event;
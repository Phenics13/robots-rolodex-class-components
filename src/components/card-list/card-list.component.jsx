import { Component } from "react";
import './card-list.styles.css';
import '../card/card.component';
import Card from "../card/card.component";


class CardList extends Component {
    render() {
        console.log('render card-list')
        const { filteredRobots } = this.props;

        return (
            <div className="card-list">
                {filteredRobots.map(robot => {
                    return <Card robot={robot} key={robot.id} />
                })}
            </div>
        );
    }
}

export default CardList;
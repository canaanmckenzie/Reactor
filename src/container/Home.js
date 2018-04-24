import React, {Component, PropTypes} from 'react';
import styled from 'styled-components';
import Container from '../theme/grid/Container';
const Image = styled.img`
width: 100%;
`;

export default class ComponentName extends Component {
	static propTypes = {};

	render() {
		return (
			<Container>

                                <Image src={require('../assets/logo.png')} alt="logo-image"/>
                                <p>Lorem ipsum dolor amet synth wayfarers jean shorts, portland heirloom brooklyn try-hard thundercats vegan hammock normcore mustache iceland four loko chicharrones. Neutra 90's coloring book glossier. Banh mi chillwave disrupt actually 3 wolf moon pabst fam copper mug post-ironic adaptogen sartorial leggings. You probably haven't heard of them gentrify mustache brunch, sustainable paleo enamel pin waistcoat activated charcoal kickstarter kinfolk leggings.

Ugh narwhal typewriter, freegan chillwave street art raclette retro next level lumbersexual etsy flexitarian farm-to-table knausgaard. Butcher air plant biodiesel twee, readymade fanny pack umami lo-fi cornhole vice. Four loko YOLO sartorial cred craft beer chartreuse. Gochujang lo-fi distillery hell of brooklyn chicharrones.

Banjo drinking vinegar austin pickled 3 wolf moon lumbersexual wolf migas tilde williamsburg prism normcore hot chicken food truck. Mustache marfa man bun art party master cleanse hexagon meh cronut godard microdosing poke leggings. Neutra prism kinfolk offal. Church-key fam quinoa, live-edge biodiesel kombucha vexillologist lo-fi fingerstache affogato wolf. Hashtag DIY cray fam sustainable pour-over.

Whatever taxidermy pickled occupy. Pickled hell of gentrify echo park, woke lomo cred kale chips trust fund tofu before they sold out edison bulb raw denim marfa intelligentsia. Offal tattooed roof party cronut. Small batch air plant coloring book actually YOLO. Austin photo booth bushwick thundercats iPhone pickled.</p>
			</Container>
			);
	}
}


import styles from "../../styles/Benefits.module.css";
import {
	MdPersonPinCircle,
	MdInsertEmoticon,
	MdHeadsetMic,
	MdMonetizationOn,
	MdModeComment,
} from "react-icons/md";
import { FaRobot } from "react-icons/fa";

export default function landing() {
	return (
		<div id="benefits" className={styles.BenefitsContainer}>
			<h1>
				Porque adquirir nosso produto?
				<br />
				Veja alguns dos benefícios oferecidos:
			</h1>

			<ul>
				<li>
					<div>
						<MdMonetizationOn />
						<br /> Economia de gastos com colaboradores
					</div>
				</li>					
				
				<li>
					<div>
						<MdPersonPinCircle />
						<br />
						Entrega no conforto de seu domicílio
					</div>
				</li>

				<li>
					<div>
						<MdHeadsetMic />
						<br />
						Atendimento 24 horas
					</div>
				</li>

				<li>
					<div>
						<MdModeComment />
						<br />
						Contato Digital e jornada de clientes
					</div>
				</li>

				<li>
					<div>
						<MdInsertEmoticon />
						<br />
						Comunicação Efeciente
					</div>
				</li>

				<li>
					<div>
						<FaRobot />
						<br />
						Soluções de chatbot(Getúlia)e inteliência artificial
					</div>
				</li>
			</ul>
		</div>
	);
}

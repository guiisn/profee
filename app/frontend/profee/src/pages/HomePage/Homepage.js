import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock, FiUserPlus} from 'react-icons/fi'

import './HomePage.css';

import BackgroundImage from '../../assets/images/bgimg.png';
import logoImage from '../../assets/images/logo1.png';

export default function HomePage() {
    return (
        <div id="page-landing">
            <img src={BackgroundImage} alt="Proofee" className="bgImage" />
            <div className="bg" />
                <section className="form">
                    <img src={logoImage} alt="Proofee" className="logo-image" />
                    <form>
                        <h2 className='conect'>conecte-se</h2>
                        <FiMail className='iconipt'/><input type="email" name='email' placeholder="email" className="inputs" />
                        <FiLock className='iconipt'/><input type="password" placeholder="senha" className="inputs" id='bt1' />
                        <a href="">esqueci minha senha</a>
                        
                        <Link to="/dashboard" className='links'>
                            <div className="buttons-container">    
                                <FiLogIn className='svg'/><button className='bt1'>entrar</button>
                            </div>
                        </Link>
                        
                        <div className="buttons-container-register">    
                            <FiLogIn className='svg'/><button className='bt2'>cadastrar</button>
                        </div>
                    </form>
                </section>
        </div>
    );
};


import React from 'react';
import { FiMenu, FiUser, FiPlus } from 'react-icons/fi'

import './Dashboard.css';

import logoImage from '../../assets/images/logo1.png';

export default function HomePage() {
    return (
        <div id="header">    
            <div className='menu-up-container'>
                <nav className="menu-up">
                    <img src={logoImage} alt="Profee" className='logo-img' title='Profee'/>
                    <div className="icons-container">    
                        <a href=""><FiPlus className="icon-add" title='Adicionar Turma'/></a>
                        <a href=""><FiUser className="icon-user" title='Perfil'/></a>     
                    </div>
                </nav>
            <div className="classes-container">
                <div className="spot">
                    <strong>Programação Orientada a Objetos</strong>
                    <h2>Turma 2020.1- Ple</h2>
                    <h2>Professor: Alexandre Barbosa</h2>
                    <span>Provas Realizadas: 4</span>
                </div>
            </div>
            </div>
        </div>
    );
};


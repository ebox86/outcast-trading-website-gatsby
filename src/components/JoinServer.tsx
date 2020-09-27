import { Component } from "react";
import { Icon, InlineIcon } from '@iconify/react';
import discordIcon from '@iconify/icons-simple-icons/discord';
import React from "react";

export default class JoinServer extends Component {
    handleClick(){
        window.location.assign('https://discord.gg/xnNpqfJ')
    }

    render() {
        return (
            <div className="m-3">
                <button 
                    className="bg-white text-gray-800 font-bold rounded border-b-2 border-discord-purple hover:border-discord-grey hover:bg-discord-purple hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                    onClick={this.handleClick.bind(this)}
                >
                    <span className="mr-2">Join on Discord</span>
                    <Icon icon={discordIcon} />
                </button>
            </div>
        )
    }
}
import React, { Component } from 'react';
import JobService from './JobService';

const jobService = new JobService();

class SkillList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            skills: [],
            /* nextPageURL: '' */
        };
        /* this.nextPage = this.nextPage.bind(this); */
        /* this.handleDelete = this.handleDelete.bind(this); */
    }
    componentDidMount() {
        var self = this;
        jobService.getSkills().then(function (result) {
            self.setState({ skills: result });
        });
    }
    render() {
        return (
            <div className="skillsContainer">
                <h2>Most Used Skills</h2>
                <ul className="skillList">
                    {
                        this.state.skills.map(
                            skill =>
                                <li key={skill.skill} className="element">
                                    {skill.skill}
                                    <span className="count">{skill.count}</span>
                                </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}
export default SkillList;
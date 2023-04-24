"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentRepositoryInMemory = void 0;
const Agent_1 = require("../../../domain/entities/Agent");
class AgentRepositoryInMemory {
    constructor() {
        this.agents = [];
    }
    async create(name) {
        const agent = new Agent_1.Agent(0, "test");
        Object.assign(agent, {
            name,
        });
        this.agents.push(agent);
        return agent;
    }
    async findById(id) {
        const agent = this.agents.find((agent) => agent.id === id);
        return agent;
    }
    async list() {
        return this.agents;
    }
}
exports.AgentRepositoryInMemory = AgentRepositoryInMemory;
//# sourceMappingURL=AgentRepositoryInMemory.js.map
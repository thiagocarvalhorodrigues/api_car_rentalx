import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'

@Entity("specifications")
class Specification {

    @PrimaryColumn()
    id?: string;

    @Column()
    name: String;

    @Column()
    description: String;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Specification };
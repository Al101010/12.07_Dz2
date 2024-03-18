export default function specialAttack(object) {
    return object.special.map(({id, name, description = "Описание недоступно", icon}) => ({id, name, description, icon}));
}
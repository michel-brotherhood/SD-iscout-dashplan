// Usuários de demonstração (seed). O login é mock (senha simulada, validada
// no navegador — sem backend real): selecionar um usuário e digitar a senha
// de demonstração define papel + escopo da sessão. Usuários criados depois
// pela tela de Gestão de Acessos vivem em stores/users.js (usersStore), não
// aqui — este array é só a semente inicial.
//
// Papéis: "admin" aprova planos e administra acessos (visão total, ver
// escopoContem); "coach" cria planos/súmulas/execuções; "responsavel" só
// acompanha a turma do próprio atleta.
//
// "Skill" = escopo de atuação: a unidade e as categorias/turmas que o usuário
// atende. Combinado ao papel, define o que cada um enxerga no app. `coachName`
// marca quem tem turma própria (aparece como opção de "Treinador Responsável"
// ao criar um plano) — independe do papel: um admin pode manter turma própria.
export const USERS = [
  {
    id: "u-carla",
    nome: "Treinadora A",
    email: "treinadora.a@example.com",
    role: "coach",
    cargo: "Coach",
    senha: "iscout",
    // Segue com visão ampla da unidade (herdada do antigo papel Head Coach),
    // mas sem turma própria — não aparece como "Treinador Responsável".
    escopo: {
      unidade: "Atibaia",
      categorias: ["Sub-11", "Sub-13", "Sub-15", "Sub-17", "Sub-20"],
      turmas: ["Turma A", "Turma B"],
    },
  },
  {
    id: "u-joao",
    nome: "Treinador B",
    email: "treinador.b@example.com",
    role: "coach",
    cargo: "Coach",
    senha: "iscout",
    // Atende exclusivamente a Sub-15 Turma A.
    escopo: { unidade: "Atibaia", categorias: ["Sub-15"], turmas: ["Turma A"] },
    coachName: "Treinador B",
  },
  {
    id: "u-maria",
    nome: "Treinadora C",
    email: "treinadora.c@example.com",
    role: "coach",
    cargo: "Coach",
    senha: "iscout",
    // Atende exclusivamente a Sub-17 Turma B.
    escopo: { unidade: "Atibaia", categorias: ["Sub-17"], turmas: ["Turma B"] },
    coachName: "Treinadora C",
  },
  {
    id: "u-gerson",
    nome: "Administrador A",
    email: "admin.a@example.com",
    role: "admin",
    cargo: "Admin",
    senha: "iscout",
    // Mantém a Sub-13 Turma A (coachName) mesmo como admin — ver escopoContem:
    // papel admin já dá visão total, coachName segue valendo para ele
    // aparecer como "Treinador Responsável" ao criar planos para essa turma.
    escopo: { unidade: "Atibaia", categorias: ["Sub-13"], turmas: ["Turma A"] },
    coachName: "Administrador A",
  },
  {
    id: "u-roberto",
    nome: "Treinador D",
    email: "treinador.d@example.com",
    role: "coach",
    cargo: "Coach",
    senha: "iscout",
    escopo: {
      unidade: "Atibaia",
      categorias: ["Sub-11", "Sub-13", "Sub-15", "Sub-17", "Sub-20"],
      turmas: ["Turma A", "Turma B"],
    },
  },
  {
    id: "u-raspada",
    nome: "Administrador B",
    email: "admin.b@example.com",
    role: "admin",
    cargo: "Admin",
    senha: "iscout",
    escopo: {
      unidade: "Atibaia",
      categorias: ["Sub-11", "Sub-13", "Sub-15", "Sub-17", "Sub-20"],
      turmas: ["Turma A", "Turma B"],
    },
  },
  {
    id: "u-mario",
    nome: "Treinador E",
    email: "treinador.e@example.com",
    role: "coach",
    cargo: "Coach",
    senha: "iscout",
    escopo: {
      unidade: "Atibaia",
      categorias: ["Sub-11", "Sub-13", "Sub-15", "Sub-17", "Sub-20"],
      turmas: ["Turma A", "Turma B"],
    },
  },
  {
    id: "u-ana",
    nome: "Responsável A",
    email: "responsavel.a@example.com",
    role: "responsavel",
    cargo: "Responsável",
    senha: "iscout",
    // Responsável por atleta da Sub-15 Turma A — só acompanha essa turma.
    escopo: { unidade: "Atibaia", categorias: ["Sub-15"], turmas: ["Turma A"] },
  },
];

// Um item está no escopo do usuário quando bate unidade + categoria + turma.
// Admin tem visão administrativa total. Coach é restrito adicionalmente aos
// treinos que ele mesmo ministra, quando tem turma própria (coachName).
export function escopoContem(item, user) {
  if (user.role === "admin") return true;
  if (item.unidade !== user.escopo.unidade) return false;
  if (!user.escopo.categorias.includes(item.categoria)) return false;
  if (!user.escopo.turmas.includes(item.turma)) return false;
  if (user.role === "coach" && user.coachName) {
    return item.coachName === user.coachName;
  }
  return true;
}

/** Descrição curta do escopo para exibição (ex.: "Atibaia · Sub-15 · Turma A"). */
export function escopoLabel(user) {
  if (user.role === "admin") return "Todas as unidades e categorias";
  const cats = user.escopo.categorias;
  const catLabel = cats.length > 2 ? `${cats.length} categorias` : cats.join(", ");
  const turmaLabel = user.escopo.turmas.length > 1 ? "Turmas A e B" : user.escopo.turmas.join(", ");
  return `${user.escopo.unidade} · ${catLabel} · ${turmaLabel}`;
}

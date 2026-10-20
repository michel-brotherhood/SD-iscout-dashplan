// Registro único de atletas (demonstração) — fonte da verdade sobre "quem é
// o aluno", separada de qualquer heurística que opere sobre ele (fundamentos/
// reforço em data/fundamentos.js) ou de dados por-sessão (escalação da
// súmula em data/mockData.js). Antes esse registro vivia dentro de
// fundamentos.js; extraído para cá porque "atleta" é uma entidade mais ampla
// que a IA de reforço — outras telas (súmula, futura página de aluno) também
// precisam dele.
//
// Escopo por unidade/categoria/turma e coachName para o filtro por perfil
// (escopoContem) funcionar igual ao resto do app.
function atleta(id, nome, matricula, categoria, turma, coachName, posicao, fundamentos) {
  return { id, nome, matricula, unidade: "Atibaia", categoria, turma, coachName, posicao, fundamentos };
}

export const atletas = [
  // Sub-15 · Turma A · Treinador B (mesma escalação da súmula)
  atleta("a-1001", "Atleta 01", "1001", "Sub-15", "Turma A", "Treinador B", "Goleiro", { Cabeceio: 48, Passe: 71, "Lançamento": 82, "Domínio": 66, "Finalização": 40, "Marcação": 74 }),
  atleta("a-1002", "Atleta 02", "1002", "Sub-15", "Turma A", "Treinador B", "Lateral", { Cabeceio: 58, Passe: 54, "Lançamento": 63, "Domínio": 70, "Finalização": 52, "Marcação": 68 }),
  atleta("a-1003", "Atleta 03", "1003", "Sub-15", "Turma A", "Treinador B", "Zagueiro", { Cabeceio: 78, Passe: 55, "Lançamento": 49, "Domínio": 62, "Finalização": 44, "Marcação": 81 }),
  atleta("a-1004", "Atleta 04", "1004", "Sub-15", "Turma A", "Treinador B", "Zagueira", { Cabeceio: 72, Passe: 57, "Lançamento": 51, "Domínio": 64, "Finalização": 46, "Marcação": 76 }),
  atleta("a-1005", "Atleta 05", "1005", "Sub-15", "Turma A", "Treinador B", "Lateral", { Cabeceio: 55, Passe: 68, "Lançamento": 58, "Domínio": 73, "Finalização": 59, "Marcação": 61 }),
  atleta("a-1006", "Atleta 06", "1006", "Sub-15", "Turma A", "Treinador B", "Meia", { Cabeceio: 44, Passe: 82, "Lançamento": 70, "Domínio": 79, "Finalização": 66, "Marcação": 52 }),
  atleta("a-1007", "Atleta 07", "1007", "Sub-15", "Turma A", "Treinador B", "Meia", { Cabeceio: 49, Passe: 76, "Lançamento": 64, "Domínio": 74, "Finalização": 57, "Marcação": 50 }),
  atleta("a-1008", "Atleta 08", "1008", "Sub-15", "Turma A", "Treinador B", "Meia", { Cabeceio: 51, Passe: 80, "Lançamento": 55, "Domínio": 77, "Finalização": 58, "Marcação": 53 }),
  atleta("a-1009", "Atleta 09", "1009", "Sub-15", "Turma A", "Treinador B", "Atacante", { Cabeceio: 63, Passe: 58, "Lançamento": 47, "Domínio": 69, "Finalização": 84, "Marcação": 42 }),
  atleta("a-1010", "Atleta 10", "1010", "Sub-15", "Turma A", "Treinador B", "Atacante", { Cabeceio: 66, Passe: 52, "Lançamento": 45, "Domínio": 71, "Finalização": 79, "Marcação": 39 }),
  atleta("a-1011", "Atleta 11", "1011", "Sub-15", "Turma A", "Treinador B", "Atacante", { Cabeceio: 59, Passe: 49, "Lançamento": 43, "Domínio": 67, "Finalização": 81, "Marcação": 41 }),

  // Sub-17 · Turma B · Atleta 02
  atleta("a-1201", "Atleta 12", "1201", "Sub-17", "Turma B", "Atleta 02", "Zagueiro", { Cabeceio: 80, Passe: 62, "Lançamento": 55, "Domínio": 64, "Finalização": 48, "Marcação": 83 }),
  atleta("a-1202", "Atleta 13", "1202", "Sub-17", "Turma B", "Atleta 02", "Volante", { Cabeceio: 57, Passe: 74, "Lançamento": 66, "Domínio": 72, "Finalização": 51, "Marcação": 69 }),
  atleta("a-1203", "Atleta 14", "1203", "Sub-17", "Turma B", "Atleta 02", "Meia", { Cabeceio: 45, Passe: 85, "Lançamento": 71, "Domínio": 80, "Finalização": 63, "Marcação": 54 }),
  atleta("a-1204", "Atleta 15", "1204", "Sub-17", "Turma B", "Atleta 02", "Atacante", { Cabeceio: 68, Passe: 56, "Lançamento": 49, "Domínio": 70, "Finalização": 82, "Marcação": 44 }),
  atleta("a-1205", "Atleta 16", "1205", "Sub-17", "Turma B", "Atleta 02", "Lateral", { Cabeceio: 52, Passe: 64, "Lançamento": 58, "Domínio": 66, "Finalização": 47, "Marcação": 60 }),
  atleta("a-1206", "Atleta 17", "1206", "Sub-17", "Turma B", "Atleta 02", "Meia", { Cabeceio: 50, Passe: 78, "Lançamento": 59, "Domínio": 75, "Finalização": 55, "Marcação": 57 }),

  // Sub-13 · Turma A · Administrador A
  atleta("a-1301", "Atleta 18", "1301", "Sub-13", "Turma A", "Administrador A", "Goleiro", { Cabeceio: 40, Passe: 58, "Lançamento": 70, "Domínio": 55, "Finalização": 38, "Marcação": 62 }),
  atleta("a-1302", "Atleta 19", "1302", "Sub-13", "Turma A", "Administrador A", "Zagueiro", { Cabeceio: 66, Passe: 51, "Lançamento": 48, "Domínio": 57, "Finalização": 42, "Marcação": 70 }),
  atleta("a-1303", "Atleta 20", "1303", "Sub-13", "Turma A", "Administrador A", "Meia", { Cabeceio: 47, Passe: 69, "Lançamento": 53, "Domínio": 68, "Finalização": 56, "Marcação": 49 }),
  atleta("a-1304", "Atleta 21", "1304", "Sub-13", "Turma A", "Administrador A", "Atacante", { Cabeceio: 54, Passe: 50, "Lançamento": 44, "Domínio": 61, "Finalização": 72, "Marcação": 43 }),
  atleta("a-1305", "Atleta 22", "1305", "Sub-13", "Turma A", "Administrador A", "Lateral", { Cabeceio: 49, Passe: 60, "Lançamento": 52, "Domínio": 58, "Finalização": 46, "Marcação": 55 }),
];

export function findAtletaById(id) {
  return atletas.find((a) => a.id === id);
}

// Chave de resolução usada pela Súmula: matrícula é o único identificador
// estável disponível quando um atleta é digitado à mão (ver EditorSumula.vue
// resolutionStatus). Matrícula vazia nunca resolve — evita colisão em
// registros sem matrícula preenchida.
export function findAtletaByMatricula(matricula) {
  const m = matricula?.trim();
  if (!m) return undefined;
  return atletas.find((a) => a.matricula === m);
}

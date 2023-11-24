export function tryParseInt(intString: string | number, defaultValue = 0) {
  if (typeof intString === "number") {
    if (isNaN(intString)) return defaultValue;
    return intString;
  }

  let intNum;

  try {
    intNum = parseInt(intString);
    if (isNaN(intNum)) intNum = defaultValue;
  } catch {
    intNum = defaultValue;
  }

  return intNum;
}
//TODO: use PCData from meter-data
export const getClassIdFromName = (name: string): number => {
  const classes: { [index: string]: number } = {
    Warrior: 101,
    Mage: 201,
    MartialArtist: 301,
    MaleMartialArtist: 311,
    Assassin: 401,
    Gunner: 501,
    "Female Gunner": 511,
    Specialist: 601,
    Berserker: 102,
    Destroyer: 103,
    Gunlancer: 104,
    Paladin: 105,
    Arcana: 202,
    Summoner: 203,
    Bard: 204,
    Sorceress: 205,
    Wardancer: 302,
    Scrapper: 303,
    Soulfist: 304,
    Glaivier: 305,
    Glavier: 305,
    Striker: 312,
    Deathblade: 402,
    Shadowhunter: 403,
    Reaper: 404,
    Souleater: 405,
    Sharpshooter: 502,
    Deadeye: 503,
    Artillerist: 504,
    Scouter: 505,
    Gunslinger: 512,
    Artist: 602,
    Aeromancer: 603,
  };

  return classes[name] || 0;
};

export const guardians = [
  509006, 512002, 512004, 512006, 512008, 512009, 512011, 512012, 512013,
  512014, 512015, 512016, 512017, 512019, 512020, 512022, 512023, 512025,
  512027, 593007, 593017, 620010, 620020, 620030, 620040, 620050, 620051,
  620052, 620060, 620061, 620070, 620071, 620080, 620100, 620110, 620140,
  620145, 620146, 620150, 620170, 620180, 620190, 620200, 620210, 620220,
  620230, 620237, 620238, 620240, 620241, 620242, 620260, 622010, 622020,
  622030, 622040, 622050, 622060, 622070, 622080, 622090, 622100, 622110,
  622120, 622130, 622140, 622150, 622160, 622170, 622190, 622200, 623031,
  623070, 624010, 624020, 624021, 624030, 624140, 630020, 630110, 630120,
  630210, 630220, 630310, 630320, 630330, 630410, 630420, 630510, 630520,
  630530, 630610, 630620, 630810, 630820, 630830, 630910, 630920, 630930,
  631810, 631820, 631830, 632610, 632620, 632630, 632710, 632720, 632730,
  632810, 632820, 632830, 632910, 632920, 632930, 633210, 633220, 633230,
  633310, 633320, 633330, 633410, 633420, 633430, 633510, 633520, 633530,
  633610, 633620, 633630, 633710, 633720, 633730, 633810, 633820, 633830,
  633840, 634110, 634120, 634130, 634140, 634150, 634160, 634170, 634180,
  634190, 634200, 634210, 634220, 634230, 634240, 634250, 720011, 620290,
  620295, 620160, 620250, 620270, 622210, 630030, 620281, 620280,
];

export const raidBosses = [
  // Airas Oculus (NM)
  494209, // Frenzied Cicerra
  494207, // Lost Seto
  // Airas Oculus (HM)
  494209, // Frenzied Cicerra
  494210, // Lost Seto
  // Oreha Prevaza (NM)
  494407, // Angry Moguro Captain
  494408, // Corrupted Albion
  // Oreha Prevaza (HM)
  494415, // Angry Moguro Captain
  494416, // Corrupted Albion
  // Valtan Legion Raid
  480005, // Leader Lugaru
  480006, // Destroyer Lucas
  480007, // Demon Beast Commander Valtan
  480008, // Torn Demon Beast Lord (Valtan ghost phase?)
  42060070, // ^ same?
  480009, // Dark Mountain Predator (Lucas/Lugaru single form)
  480010, // Dark Mountain Predator (^)
  480011, // Dark Mountain Predator (^)
  // Vykas Legion Raid
  480208, // Incubus Morphe
  480209, // Nightmarish Morphe
  480210, // Covetous Devourer Vykas
  480211, // Covetous Legion Commander Vykas
  // Kakul-Saydon Legion Raid
  480601, // Saydon
  480611, // Kakul
  480651, // Saydon
  480691, // Saydon
  480631, // Kakul-Saydon
  480635, // Encore-Desiring Kakul-Saydon
  // Brelshaza Legion Raid
  480815, // Brelshaza, Monarch of Nightmares
  480805, // Crushing Phantom Wardog
  480874, // Molting Phantom Wardog
  480875, // Echoing Phantom Wardog
  480876, // Raging Phantom Wardog
  480806, // Grieving Statue
  480807, // Furious Statue
  480877, // Despairing Statue
  480878, // Eroded Statue
  480803, // Nightmare Gehenna
  480804, // Nightmare Helkasirs
  480802, // Gehenna Helkasirs
  480808, // Prokel
  480809, // Prokel's Spiritual Echo
  480810, // Ashtarot
  480811, // Primal Nightmare
  480813, // Brelshaza, Monarch of Nightmares
  480814, // Phantom Legion Commander Brelshaza
];

export const abyssRaids = [
  // Argos - Dont know what phase is which
  634000, // P1?
  634010, // P2?
  634020, // P3?
];

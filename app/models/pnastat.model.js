module.exports = (sequelize, Sequelize) => {
  const Pnastat = sequelize.define("vstupy", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    Jmeno: {
      type: Sequelize.STRING(32)
    },
    JednVykonu: {
      type: Sequelize.STRING(8)
    },
    JednPrace: {
      type: Sequelize.STRING(8)
    },
    Typ: {
      type: Sequelize.STRING(8)
    },
    notes: {
      type: Sequelize.STRING(1024)
    }
  });

  return Pnastat;
};
/*
CREATE TABLE `vstupy` (
  `id` int NOT NULL,
  `Jmeno` varchar(32) DEFAULT NULL,
  `JednVykonu` varchar(8) DEFAULT NULL,
  `JednPrace` varchar(8) DEFAULT NULL,
  `Typ` varchar(8) DEFAULT NULL,
  `notes` varchar(1024) DEFAULT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3

module.exports = (sequelize, Sequelize) => {
  const Pnastat = sequelize.define("hladiny", {
    id_hladiny: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    hladiny_u: {
      type: Sequelize.DECIMAL(12,3)
    },
    zobraz: {
      type: Sequelize.INTEGER
    },
    popis: {
      type: Sequelize.STRING
    }
  });

  return Pnastat;
};*/

/*module.exports = (sequelize, Sequelize) => {
  const Pnastat = sequelize.define("pna_stat", {
    id: {
      type: Sequelize.TINYINT
    },
    dtStart: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    duration: {
      type: Sequelize.STRING
    },
    duration_sec: {
      type: Sequelize.DECIMAL(10,2)
    }
  });

  return Pnastat;
};*/
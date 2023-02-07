-- MySQL Workbench Synchronization
-- Generated: 2023-02-06 18:45
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: angel

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `Optica` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS `Optica`.`Proveïdor` (
  `Id_proveidor` INT(30) NOT NULL,
  `Nom` VARCHAR(50) NOT NULL,
  `Carrer` TEXT NOT NULL,
  `Numero` INT(20) NOT NULL,
  `Pis` INT(5) NOT NULL,
  `Porta` INT(5) NOT NULL,
  `Ciutat` VARCHAR(45) NOT NULL,
  `Codi_Postal` INT(10) NOT NULL,
  `Pais` VARCHAR(45) NOT NULL,
  `Telefon` VARCHAR(45) NOT NULL,
  `Fax` INT(30) NULL DEFAULT NULL,
  `Nif` TEXT NOT NULL,
  PRIMARY KEY (`Id_proveidor`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `Optica`.`Ulleres` (
  `Id_ulleres` VARCHAR(45) NOT NULL,
  `Id_proveidor` INT(30) NOT NULL,
  `Id_client` VARCHAR(45) NOT NULL,
  `Marca` VARCHAR(30) NOT NULL,
  `Graduacio_vidre_esquerra` DECIMAL(10) NOT NULL,
  `Graduacio_vidre_dret` DECIMAL(10) NOT NULL,
  `Color_vidre_esquerra` VARCHAR(45) NOT NULL,
  `Color_vidre_dret` VARCHAR(45) NOT NULL,
  `Muntura` VARCHAR(45) NOT NULL,
  `Color_muntura` VARCHAR(45) NOT NULL,
  `Preu` DECIMAL(10) NOT NULL,
  PRIMARY KEY (`Id_ulleres`),
  INDEX `Id_ulleres_idx` (`Id_proveidor` ASC) VISIBLE,
  CONSTRAINT `Id_ulleres`
    FOREIGN KEY (`Id_proveidor`)
    REFERENCES `Optica`.`Proveïdor` (`Id_proveidor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `Optica`.`Client` (
  `id_Client` INT(11) NOT NULL AUTO_INCREMENT,
  `Nom` VARCHAR(45) NOT NULL,
  `Adreça` TEXT NOT NULL,
  `Telefon` INT(20) NOT NULL,
  `Correu` TEXT NULL DEFAULT NULL,
  `Data_registre` DATE NOT NULL,
  `Id_ulleres` VARCHAR(45) NOT NULL,
  `id_Client_referencia` INT(11) NOT NULL,
  PRIMARY KEY (`id_Client`),
  INDEX `id_Client_idx` (`Id_ulleres` ASC) VISIBLE,
  INDEX `fk_Client_Client1_idx` (`id_Client_referencia` ASC) VISIBLE,
  CONSTRAINT `id_Client`
    FOREIGN KEY (`Id_ulleres`)
    REFERENCES `Optica`.`Ulleres` (`Id_ulleres`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Client_Client1`
    FOREIGN KEY (`id_Client_referencia`)
    REFERENCES `Optica`.`Client` (`id_Client`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `Optica`.`Ventas` (
  `id_ventas` INT(11) NOT NULL,
  `id_empleat` VARCHAR(45) NOT NULL,
  `Ulleres_Id_ulleres` VARCHAR(45) NOT NULL,
  `id_Client` INT(11) NOT NULL,
  `venta` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id_ventas`),
  INDEX `fk_Ventas_Ulleres1_idx` (`Ulleres_Id_ulleres` ASC) VISIBLE,
  INDEX `fk_Ventas_Client1_idx` (`id_Client` ASC) VISIBLE,
  CONSTRAINT `fk_Ventas_Ulleres1`
    FOREIGN KEY (`Ulleres_Id_ulleres`)
    REFERENCES `Optica`.`Ulleres` (`Id_ulleres`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Ventas_Client1`
    FOREIGN KEY (`id_Client`)
    REFERENCES `Optica`.`Client` (`id_Client`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

"use strict";

const mongoose = require('mongoose');
const skateDAO = require(process.cwd() + '/server/api/skateboard/dao/skate-dao');
const expect = require('chai').expect;
const setupMongoose = require('../../_helpers/db').setupMongoose;

describe('skateDAO', () => {
  before(() => {
    setupMongoose(mongoose);
  });

  afterEach(() => {
    skateDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})

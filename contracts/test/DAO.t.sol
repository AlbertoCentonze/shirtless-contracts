// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@forge-std/Test.sol";
import "@forge-std/console.sol";
import "./TestWithHelpers.sol";
import "../src/Shirtless.sol";
import "../src/NftManager.sol";
import "./MaticTest.sol";
import "@openzeppelin/contracts/finance/PaymentSplitter.sol";

contract DaoTest is TestWithHelpers, MaticTest {
    address[] payees;
    uint256[] shares;

    NftManager dao;
    Shirtless collection;

    function setUp() public {
        address REWARDER = makeAddr('rewarder');
        // Deploy the DAO contract
        dao = new NftManager(1, 10, wMatic, REWARDER);

        // Gives the dao control on the NFT collection
        collection.setOwner(address(dao));
        dao.setCollection(address(collection));
    }

    function testCannotMintWithNotEnoughMoney() public {
        vm.expectRevert(bytes("Value sent in tx does not match mint price"));
        dao.mint{value: 0.5 ether}();
    }

    function testCannotMintWithTooMuchMoney() public {
        vm.expectRevert(bytes("Value sent in tx does not match mint price"));
        dao.mint{value: 1.5 ether}();
    }

    function testMintWholeSupply() public {
        vm.startPrank(RANDOM);
        for (uint256 id = 0; id < 100; id++) {
            uint256 idBalance = collection.balanceOf(RANDOM);
            assertEq(idBalance, id);
            dao.mint{value: 1 ether}();
            idBalance = collection.balanceOf(RANDOM);
            assertEq(idBalance, id + 1);
        }
        vm.stopPrank();
    }

    function testCannotMintMoreThanMaxSupply() public {
        vm.startPrank(RANDOM);
        for (uint256 id = 0; id < 101; id++) {
            if (id > 99) {
                vm.expectRevert(bytes("Can't mint more NFTs than max supply"));
            }
            dao.mint{value: 1 ether}();
        }
        vm.stopPrank();
    }

    function testBurnSupply() public {
        vm.startPrank(RANDOM);

        assertEq(collection.balanceOf(RANDOM), 0);

        dao.mint{value: 1 ether}();
        assertEq(collection.balanceOf(RANDOM), 1);

        dao.mint{value: 1 ether}();
        assertEq(collection.balanceOf(RANDOM), 2);

        dao.burn(1);
        assertEq(collection.balanceOf(RANDOM), 1);

        dao.mint{value: 1 ether}();
        assertEq(collection.balanceOf(RANDOM), 2);

        dao.mint{value: 1 ether}();
        assertEq(collection.balanceOf(RANDOM), 3);

        dao.burn(3);
        assertEq(collection.balanceOf(RANDOM), 2);

        vm.stopPrank();
    }

    //TODO: test the burning mechanism using the aaveVault to verify the slashingPercentage
}

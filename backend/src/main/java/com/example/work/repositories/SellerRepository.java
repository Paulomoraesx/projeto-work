package com.example.work.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.work.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}

package com.open.repository;

public class PttRepositoryImpl implements PttRepositoryCustom{

	private static String collectionName = "Car";

    @Override
    public String getCollectionName() {
        return collectionName;
    }

    @Override
    public void setCollectionName(String collectionName) {
    	PttRepositoryImpl.collectionName = collectionName;
    }

}
